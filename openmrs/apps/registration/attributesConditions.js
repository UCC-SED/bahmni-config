var showOrHideExemptionSection = function (patient) {
    var returnValues = {
        show: [],
        hide: []
    };
    if (patient["Payment Mode"].value=="Exemption") {
        returnValues.show.push("exemption")
    } else {
        returnValues.hide.push("exemption")
    }
    return returnValues
};

Bahmni.Registration.AttributesConditions.rules = {
    'Payment Mode': function (patient) {
        return showOrHideExemptionSection(patient);
    }
};