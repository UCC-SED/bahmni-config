Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Chief Complaint Data': function(formName, formFieldValues) {//'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {show: [], hide: []};
        var chiefComplaint = formFieldValues['Chief Complaint'];
        var nonCodedChiefComplaint = formFieldValues['Non-Coded Chief Complaint'];
        if(chiefComplaint || nonCodedChiefComplaint) {
            conditions.show.push("Chief Complaint Notes")
        } else {
            conditions.hide.push("Chief Complaint Notes")
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Joined Community Support Organisation': function(formName, formFieldValues) {
        var conditions = {show: [], hide: []};
        var name = "Name of Organisation Group";
        var conditionConcept = formFieldValues['Patient Joined Community Support Organisation'];
        if(conditionConcept ) {
            conditions.show.push(name)
        } else {
            conditions.hide.push(name)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Referred From': function(formName, formFieldValues) {
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
    'HTC, Pregnancy Status': function(formName, formFieldValues) {
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
    }
};