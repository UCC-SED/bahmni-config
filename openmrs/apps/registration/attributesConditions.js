var showOrHideGuardianSection = function (patient) {
    var returnValues = {
        show: [],
        hide: []
    };

    console.log(patient);
    if (patient["dead"]) {
        returnValues.show.push("deadNote")
    } else {
        returnValues.hide.push("deadNote")
    }
    return returnValues
};

Bahmni.Registration.AttributesConditions.rules = {
    'dead': function (patient) {
        return showOrHideGuardianSection(patient);
    }

};