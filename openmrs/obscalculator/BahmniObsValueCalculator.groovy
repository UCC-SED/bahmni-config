import org.apache.commons.lang.StringUtils
import org.hibernate.Query
import org.hibernate.SessionFactory
import org.openmrs.Obs
import org.openmrs.Patient
import org.openmrs.module.bahmniemrapi.encountertransaction.contract.BahmniObservation
import org.openmrs.util.OpenmrsUtil;
import org.openmrs.api.context.Context
import org.openmrs.module.bahmniemrapi.obscalculator.ObsValueCalculator;
import org.openmrs.module.bahmniemrapi.encountertransaction.contract.BahmniEncounterTransaction
import org.openmrs.module.emrapi.encounter.domain.EncounterTransaction;
import java.util.logging.Logger;

import org.joda.time.LocalDate;
import org.joda.time.Months;

public class eFMSObsValueValidator implements ObsValueCalculator {


    static Map<BahmniObservation, BahmniObservation> obsParentMap = new HashMap<BahmniObservation, BahmniObservation>();


    private String status
    Logger logger = Logger.getLogger("")


    @Override
    public String toString() {
        return status
    }


    public void run(BahmniEncounterTransaction bahmniEncounterTransaction) {
        System.out.println("This is previousHeight )
                println "Hello World"
                logger.info("This is Logging ")
                validator(bahmniEncounterTransaction)
    }

    static def validator(BahmniEncounterTransaction bahmniEncounterTransaction) {
        Collection<BahmniObservation> observations = bahmniEncounterTransaction.getObservations()
        def nowAsOfEncounter = bahmniEncounterTransaction.getEncounterDateTime() != null ? bahmniEncounterTransaction.getEncounterDateTime() : new Date()

        BahmniObservation WHOConcept = findConceptInChildObs("CTC - WHO clinical stage (1 - 4)", bahmniObs)

        if (hasValue(heightObservation)) {
            def previousHeightValue = fetchLatestObsValue("CTC - WHO clinical stage (1 - 4)", bahmniEncounterTransaction.getPatientUuid(), WHOConcept, nowAsOfEncounter)

            System.out.println("This is previousHeight " + previousHeightValue);
            logger.info("This is previousHeight " + previousHeightValue)
        }

        logger.info("This is Logging ")

    }

    static Double fetchLatestObsValue(String conceptName, String patientUuid, BahmniObservation excludeObs, Date tillDate) {
        SessionFactory sessionFactory = Context.getRegisteredComponents(SessionFactory.class).get(0)
        def excludedObsIsSaved = excludeObs != null && excludeObs.uuid != null
        String excludeObsClause = excludedObsIsSaved ? " and obs.uuid != :excludeObsUuid" : ""
        Query queryToGetObservations = sessionFactory.getCurrentSession()
                .createQuery("select obs " +
                " from Obs as obs, ConceptName as cn " +
                " where obs.person.uuid = :patientUuid " +
                " and cn.concept = obs.concept.conceptId " +
                " and cn.name = :conceptName " +
                " and obs.voided = false" +
                " and obs.obsDatetime <= :till" +
                excludeObsClause +
                " order by obs.obsDatetime desc ");
        queryToGetObservations.setString("patientUuid", patientUuid);
        queryToGetObservations.setParameterList("conceptName", conceptName);
        queryToGetObservations.setParameter("till", tillDate);
        if (excludedObsIsSaved) {
            queryToGetObservations.setString("excludeObsUuid", excludeObs.uuid)
        }
        queryToGetObservations.setMaxResults(1);
        List<Obs> observations = queryToGetObservations.list();
        if (observations.size() > 0) {

            return observations.get(0).getValueNumeric();

        }
        return null
    }


    static BahmniObservation createObs(String conceptName, BahmniObservation parent, BahmniEncounterTransaction encounterTransaction, Date obsDatetime) {
        def concept = Context.getConceptService().getConceptByName(conceptName)
        BahmniObservation newObservation = new BahmniObservation()
        newObservation.setConcept(new EncounterTransaction.Concept(concept.getUuid(), conceptName))
        newObservation.setObservationDateTime(obsDatetime);
        parent == null ? encounterTransaction.addObservation(newObservation) : parent.addGroupMember(newObservation)
        return newObservation
    }

    static BahmniObservation findConceptInChildObs(String conceptName, parent) {
        if (parent == null)
            return null;
        for (BahmniObservation observation : parent.getGroupMembers()) {
            if (conceptName.equalsIgnoreCase(observation.getConcept().getName()) && !observation.getVoided()) {
                return observation;
            }
        }
        return null
    }

    static List<BahmniObservation> findListOfObservationsInChildObs(String conceptName, parent) {
        List<BahmniObservation> obsList = new ArrayList<BahmniObservation>();
        if (parent == null)
            return obsList;

        for (BahmniObservation observation : parent.getGroupMembers()) {
            if (conceptName.equalsIgnoreCase(observation.getConcept().getName()) && !observation.getVoided()) {
                obsList.add(observation);
            }
        }
        return obsList;
    }

    static BahmniObservation find(String conceptName, Collection<BahmniObservation> observations, BahmniObservation parent) {
        for (BahmniObservation observation : observations) {
            if (conceptName.equalsIgnoreCase(observation.getConcept().getName())) {
                obsParentMap.put(observation, parent);
                return observation;
            }
            BahmniObservation matchingObservation = find(conceptName, observation.getGroupMembers(), observation)
            if (matchingObservation) return matchingObservation;
        }
        return null
    }


    static def getNumericValue(BahmniObservation bahmniObservation) {
        return hasValue(bahmniObservation) && !bahmniObservation.voided ? bahmniObservation.getValue() as Double : 0;
    }

    static def getBooleanValue(BahmniObservation bahmniObservation) {
        return hasValue(bahmniObservation) && !bahmniObservation.voided ? bahmniObservation.getValue() as Boolean : false;
    }


}
