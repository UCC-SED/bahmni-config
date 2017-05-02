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
    'Systolic Data' : function (formName, formFieldValues, patient) {
        console.log(patient);
        if (patient['gender'] == 'Female') {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"],
                error: "Error message here if any"
            }
        }
    }
};