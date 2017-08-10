Bahmni.Registration.AttributesConditions.rules = {
    'gender': function (patient) {
        return showOrHidePregnancySection(patient);
    },
	 'age': function (patient) {
        return showOrHidePregnancySection(patient);
    }
	

};