var showOrHidePregnancySection = function (patient) {
    var returnValues = {
        show: [],
        hide: []
    };
	
	 console.log(patient);


    if (patient["gender"]=="M" ) {
		 
        returnValues.hide.push("pregnancyStatus")
    }else if(patient["age"]["years"]<10)
	{
		returnValues.hide.push("pregnancyStatus")
	}	
	else {
		
        returnValues.show.push("pregnancyStatus")
    }
    return returnValues
};

Bahmni.Registration.AttributesConditions.rules = {
    'gender': function (patient) {
        return showOrHidePregnancySection(patient);
    },
	 'age': function (patient) {
        return showOrHidePregnancySection(patient);
    }
	

};