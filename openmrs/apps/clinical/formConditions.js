Bahmni.ConceptSet.FormConditions.rules = {
    'Systolic Data' : function (formName, formFieldValues, patient) {
        console.log(patient);
        var conditions = {show: [], hide: []};
        if (patient['gender'] == 'F') {
                conditions.show.push("Posture")
        } else {
                conditions.hide.push("Posture")
        }

        return conditions;
    },
    'ARV Status' : function (formName, formFieldValues, patient) {
        var value = formFieldValues['ARV Status'];
        console.log("Value " + value);
        var conditions = {show: [], hide: []};
        if (value) {
            conditions.show.push("ARV Regimens");

        } else {
            conditions.hide.push("ARV Regimens");
        }

        return conditions;
    },
    'Function Reproductive' : function (formName, formFieldValues, patient) {
        console.log(patient);
        var conditions = {show: [], hide: []};
        if (patient['gender'] == 'F' && patient['age'] > 10) {
            conditions.show.push("Function Reproductive");

        } else {
            conditions.hide.push("Function Reproductive");


        }

        return conditions;
    },
    'HIV Vitals': function(formName, formFieldValues, patient) {//'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {show: [], hide: []};
        var height = formFieldValues['HEIGHT'];
        var variable = "HEIGHT";
        if(patient['age']>15) {

            conditions.hide.push(variable)
        } else {
            conditions.show.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient refered from': function(formName, formFieldValues, patient) {//'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {show: [], hide: []};
        var other = formFieldValues['Patient refered from'];
        var variable = "Other Referred from";
        if(other =="Patient refered from, Other") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Joined Community Support Organisation': function(formName, formFieldValues, patient) {
        var conditions = {show: [], hide: []};
        var name = "Name of Community Support Organisation";
        var conditionConcept = formFieldValues['Patient Joined Community Support Organisation'];
        if(conditionConcept ) {
            conditions.show.push(name)
        } else {
            conditions.hide.push(name)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Referred From': function(formName, formFieldValues, patient) {
        var conditions = {show: [], hide: []};
        var other = "Patient Referred From - Other Specify";
        var conditionConcept = formFieldValues['Patient Referred From'];
        if(conditionConcept== "Patient Referred From - Other" ) {
            conditions.show.push(other)
        } else {
            conditions.hide.push(other)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'HTC, Pregnancy Status': function(formName, formFieldValues, patient) {
        var conditions = {show: [], hide: []};
        var edd = "HCT, EDD Date";
        var anc = "HCT, ANC Number";
        var family_plan="Family Planning Template";
        var conditionConcept = formFieldValues['HTC, Pregnancy Status'];
        if(conditionConcept== "Yes" ) {
            conditions.show.push(edd)
            conditions.show.push(anc)
            conditions.hide.push(family_plan)

        } else {
            conditions.hide.push(edd)
            conditions.hide.push(anc)
            conditions.show.push(family_plan)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'ART Adherence Status': function(formName, formFieldValues, patient) {
        var conditions = {show: [], hide: []};
        var poor = "ART Adherence Status Poor";
        var conditionConcept = formFieldValues['ART Adherence Status'];
        if(conditionConcept== "ART Adherence Status, POOR" ) {
            conditions.show.push(poor)
        } else {
            conditions.hide.push(poor)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'ART Adherence Status Poor': function(formName, formFieldValues, patient) {
        var conditions = {show: [], hide: []};
        var other = "ART Adherence Status, Other Specify";
        var conditionConcept = formFieldValues['ART Adherence Status Poor'];
        if(conditionConcept== "ART Adherence Status, Other" ) {
            conditions.show.push(other)
        } else {
            conditions.hide.push(other)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Pregnant Y/N': function(formName, formFieldValues) {
        var edd = "EDD";
        var ancNumber = "HCT, ANC Number";
        var familyPlanning = "Family Planning Template";
        var pregnanciesDelivery = "Pregnancies";

        var conditionConcept = formFieldValues['Pregnant Y/N'];
        if (conditionConcept) {

            return {enable: [edd,ancNumber,pregnanciesDelivery], disable: [familyPlanning]}

        } else {
            return {disable: [edd,ancNumber,pregnanciesDelivery], enable: [familyPlanning]}
        }
    },
    'ARV Status': function(formName, formFieldValues) {


        var conditions = {show: [], hide: []};
        var arvStatus = formFieldValues['ARV Status'];

        if (arvStatus == "ARV Status, NO ARV") {
            conditions.show.push("ARV Reason - No Start");
            conditions.hide.push("ARV Start");

            conditions.hide.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("ARV Reason - Change or Stop because of Other reasons");
            conditions.hide.push("ARV Regimens");


        } else if (arvStatus == "ARV Status, START ARV") {

            conditions.show.push("ARV Start");


            conditions.hide.push("ARV Reason - No Start");
            conditions.hide.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("ARV Reason - Change or Stop because of Other reasons");

            conditions.show.push("ARV Regimens");
        } else if (arvStatus == "ARV Status, CONTINUE") {
            conditions.show.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.show.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.show.push("ARV Reason - Change or Stop because of Other reasons");
            conditions.hide.push("ARV Start");
            conditions.hide.push("ARV Reason - No Start");

            conditions.show.push("ARV Regimens");


        } else if (arvStatus == "ARV Status, CHANGE") {
            conditions.show.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.show.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.show.push("ARV Reason - Change or Stop because of Other reasons");
            conditions.hide.push("ARV Start");
            conditions.hide.push("ARV Reason - No Start");

            conditions.show.push("ARV Regimens");

        } else if (arvStatus == "ARV Status, STOP") {
            conditions.show.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.show.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.show.push("ARV Reason - Change or Stop because of Other reasons");
            conditions.hide.push("ARV Start");
            conditions.hide.push("ARV Reason - No Start");


            conditions.hide.push("ARV Regimens");
        } else if (arvStatus == "ARV Status, RESTART") {
            conditions.show.push("ARV Start");
            conditions.hide.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("ARV Reason - Change or Stop because of Other reasons");

            conditions.show.push("ARV Regimens");
        } else if (arvStatus == "ARV Status, PMTCT Prophylaxis") {
            conditions.show.push("ARV Start");
            conditions.hide.push("ARV Reason - No Start");
            conditions.hide.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("ARV Reason - Change or Stop because of Other reasons");

            conditions.show.push("ARV Regimens");
        } else {

            conditions.hide.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("ARV Reason - Change or Stop because of Other reasons");
            conditions.hide.push("ARV Regimens");
            conditions.hide.push("ARV Start");
            conditions.hide.push("ARV Reason - No Start");


        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'ARV Reason - No Start': function(formName, formFieldValues) {

        var conditions = {show: [], hide: []};
        var arvReason = formFieldValues['ARV Reason - No Start'];

        if (arvReason == "99 - Patient fulfils criteria but does not start for other reason") {
            conditions.show.push("ARV Specify other reason");

        } else {
            conditions.hide.push("ARV Specify other reason");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'ARV Adherence status': function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};

        var arvAdherencestatus = formFieldValues['ARV Adherence status'];

        if (arvAdherencestatus == "2 P(Poor) - 2 or more missed days") {
            conditions.show.push("Reasons for poor ARV adherence");

        } else {
            conditions.hide.push("Reasons for poor ARV adherence");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'Reasons for poor ARV adherence': function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};

        var poorARVAdherence = formFieldValues['Reasons for poor ARV adherence'];

        if (poorARVAdherence == "13 - Other (Specify)") {
            conditions.show.push("Other Reasons for poor ARV adherence");

        } else {
            conditions.hide.push("Other Reasons for poor ARV adherence");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'Referral to': function(formName, formFieldValues) {
        var conditions = {
            show: [],
            hide: []
        };
        var referralTo = formFieldValues['Referral to'];

        if (referralTo == "10 - Other") {
            conditions.show.push("Other Referral to");

        } else {
            conditions.hide.push("Other Referral to");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },

    'ARV Regimens - First Line Adult': function(formName, formFieldValues) {
        var firstLineAdult = "ARV Regimens - First Line Adult";
        var secondLineAdult = "ARV Regimens - Second Line Adult";
        var firstLinePediatric = "ARV Regimens - First Line Pediatric";
        var secondLinePediatric = "ARV Regimens - Second Line Pediatric";
        var conditionConcept = formFieldValues['ARV Regimens - First Line Adult'];
        if (conditionConcept != null) {
            return {
                disable: [secondLineAdult, firstLinePediatric, secondLinePediatric]
            }
        } else {
            return {
                enable: [secondLineAdult, firstLinePediatric, secondLinePediatric]
            }
        }
    }
};