select  cn.name,
		IF(floor(datediff(CURDATE(), p.birthdate) / 365) < 5 AND p.gender='M', COUNT(cn.name) ,0) AS '5<,ME',
	    IF(floor(datediff(CURDATE(), p.birthdate) / 365) < 5 AND p.gender='F', COUNT(cn.name) ,0) AS '5<,KE',
		IF(floor(datediff(CURDATE(), p.birthdate) / 365) < 60 AND floor(datediff(CURDATE(), p.birthdate) / 365) > 5 AND p.gender='M', COUNT(cn.name) ,0) AS '5><60,ME',
	    IF(floor(datediff(CURDATE(), p.birthdate) / 365) < 60 AND floor(datediff(CURDATE(), p.birthdate) / 365) > 5 AND p.gender='F', COUNT(cn.name) ,0) AS '5><60,KE',
        COUNT(cn.name) as total
        from visit v
        join person_name pn on v.patient_id = pn.person_id and pn.voided = 0 AND v.voided = 0
        join patient_identifier pi on v.patient_id = pi.patient_id
        join patient_identifier_type pit on pi.identifier_type = pit.patient_identifier_type_id
        join person p on v.patient_id = p.person_id
		join encounter e on v.visit_id = e.visit_id
		join obs o on e.encounter_id = o.encounter_id
		join concept c on o.value_coded = c.concept_id and c.concept_id IN ( select concept_id from openmrs.diagnosis_concept_view)
        join concept_name cn on cn.concept_id=c.concept_id
		where  v.date_created BETWEEN '#startDate#' and '#endDate#'
		group by cn.name
        order by v.date_created desc