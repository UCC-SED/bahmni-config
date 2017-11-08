Bahmni.Clinical.Program.FormConditions.rules = {
    'DOT Option': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['DOT Option'] == 'Home-based DOT') {

            conditions.show.push('Name of Treatment Supporter');
            conditions.show.push('Tel No of Treatment Supporter');
            conditions.show.push('Physical Address of Treatment Supporter');
            conditions.show.push('Name of Community Support Organisation');
        } else if (patientProgramAttributes['DOT Option'] == 'Health Facility DOT') {
            conditions.hide.push('Name of Treatment Supporter');
            conditions.hide.push('Tel No of Treatment Supporter');
            conditions.hide.push('Physical Address of Treatment Supporter');
            conditions.hide.push('Name of Community Support Organisation');
        }
        return conditions;
    },
    'Classification by site': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['Classification by site'] == 'Extra-pulmonary') {

            conditions.show.push('Site');
        } else if (patientProgramAttributes['Classification by site'] == 'Pulmonary') {
            conditions.hide.push('Site');
        }
        return conditions;
    },

    'HIV Status': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['HIV Status'] == 'Positive') {

            conditions.show.push('CPT');
            conditions.show.push('CPT Start Date');
            conditions.show.push('ART drugs');
            conditions.show.push('ART Start Date');
            conditions.show.push('HIV Care registration number');
        } else if (patientProgramAttributes['HIV Status'] == 'Negative') {
            conditions.hide.push('CPT');
            conditions.hide.push('CPT Start Date');
            conditions.hide.push('ART drugs');
            conditions.hide.push('ART Start Date');
            conditions.hide.push('HIV Care registration number');
        }
        return conditions;
    },
    'Place of Work': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['Place of Work'] == 'Other') {

            conditions.show.push('Place of Work-Other');
        } else if (patientProgramAttributes['Place of Work'] == 'TB - Hfacility') {
            conditions.hide.push('Place of Work-Other');
        }else if(patientProgramAttributes['Place of Work'] == 'Mines')
        {
            conditions.hide.push('Place of Work-Other');
        }
        return conditions;
    },
    'Classification by site': function (patientProgramAttributes) 
    {
        var conditions = 
        {
            show: [],
            hide: []
        };
        
        if (patientProgramAttributes['Classification by site'] == 'TB - Pulmonary') 
        {
            conditions.hide.push('TB - Site');
        } else
        {
            conditions.show.push('TB - Site');
        }
        return conditions;
    },
    'TB - HIV Status': function (patientProgramAttributes) 
    {
        var conditions = 
        {
            show: [],
            hide: []
        };
        
        if (patientProgramAttributes['TB - HIV Status'] == 'TB - HIV Status - Negative') 
        {
            conditions.hide.push('TB - HIV Care registration number');
            conditions.hide.push('TB - CPT');
            conditions.hide.push('TB - CPT - Start Date');
            conditions.hide.push('TB - ART drugs');
            conditions.hide.push('TB - ART - Start Date');
        } else
        {
           conditions.show.push('TB - HIV Care registration number');
            conditions.show.push('TB - CPT');
            conditions.show.push('TB - CPT - Start Date');
            conditions.show.push('TB - ART drugs');
            conditions.show.push('TB - ART - Start Date');
        }
        return conditions;
    },
    'Reffered by': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['Reffered by'] == 'Others(Specify below)') {

            conditions.show.push('Reffered by-Other');
        } else if (patientProgramAttributes['Reffered by'] == 'Self') {
            conditions.hide.push('Reffered by-Other');
        }else if(patientProgramAttributes['Reffered by'] == 'Community' )
        {
         conditions.hide.push('Reffered by-Other');
        }else if(patientProgramAttributes['Reffered by'] == 'CTC')
        {
         conditions.hide.push('Reffered by-Other');
        }
        return conditions;
    }
};
