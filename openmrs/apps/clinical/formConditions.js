Bahmni.ConceptSet.FormConditions.rules = {
    'Systolic Data': function(formName, formFieldValues, patient) {
        console.log(patient);
        var conditions = {
            show: [],
            hide: []
        };
        if (patient['gender'] == 'F') {
            conditions.show.push("Posture")
        } else {
            conditions.hide.push("Posture")
        }

        return conditions;
    },
    'Tests and Examinations': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var cd4Percentage = "CTC - CD4 Percentage";
        var cd4Count = "CTC - CD4 Count"
        if (patient['age'] > 15) {
            conditions.show.push(cd4Count);
            conditions.hide.push(cd4Percentage);

        } else {
            conditions.show.push(cd4Percentage);
            conditions.hide.push(cd4Count);


        }

        return conditions;
    },
    'HIV Vitals': function(formName, formFieldValues, patient) { //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var height = formFieldValues['HEIGHT'];
        var variable = "HEIGHT";
        if (patient['age'] > 15) {

            conditions.hide.push(variable)
        } else {
            conditions.show.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient refered from': function(formName, formFieldValues, patient) { //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['Patient refered from'];
        var variable = "Other Referred from";
        if (other == "Patient refered from, Other") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Joined Community Support Organisation': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var name = "Name of Community Support Organisation";
        var conditionConcept = formFieldValues['Patient Joined Community Support Organisation'];
        if (conditionConcept) {
            conditions.show.push(name)
        } else {
            conditions.hide.push(name)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Referred From': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = "Patient Referred From - Other Specify";
        var conditionConcept = formFieldValues['Patient Referred From'];
        if (conditionConcept == "Patient Referred From - Other") {
            conditions.show.push(other)
        } else {
            conditions.hide.push(other)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'HTC, Pregnancy Status': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var edd = "HCT, EDD Date";
        var anc = "HCT, ANC Number";
        var family_plan = "Family Planning Template";
        var conditionConcept = formFieldValues['HTC, Pregnancy Status'];
        if (conditionConcept == "Yes") {
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
        var conditions = {
            show: [],
            hide: []
        };
        var poor = "ART Adherence Status Poor";
        var conditionConcept = formFieldValues['ART Adherence Status'];
        if (conditionConcept == "ART Adherence Status, POOR") {
            conditions.show.push(poor)
        } else {
            conditions.hide.push(poor)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'ART Adherence Status Poor': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = "ART Adherence Status, Other Specify";
        var conditionConcept = formFieldValues['ART Adherence Status Poor'];
        if (conditionConcept == "ART Adherence Status, Other") {
            conditions.show.push(other)
        } else {
            conditions.hide.push(other)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'CTC - Pregnant Y/N': function(formName, formFieldValues) {
        var edd = "CTC - EDD";
        var ancNumber = "CTC - ANC Number";
        var familyPlanning = "CTC - Family Planning Template";


        var conditions = {
            show: [],
            hide: []
        };

        var conditionConcept = formFieldValues['CTC - Pregnant Y/N'];

        console.log(conditionConcept);
        if (conditionConcept) {

            return {
                show: [edd, ancNumber],
                hide: [familyPlanning]
            }

        } else {
            return {
                hide: [edd, ancNumber],
                show: [familyPlanning]
            }
        }
    },
    'CTC - Function Reproductive': function(formName, formFieldValues, patient) {
        console.log(patient);
        var conditions = {
            show: [],
            hide: []
        };
        if (patient['gender'] == 'F' && patient['age'] > 10) {
            conditions.show.push("CTC - Function Reproductive");

        } else {
            conditions.hide.push("CTC - Function Reproductive");


        }

        return conditions;
    },
    'CTC - ARV Status': function(formName, formFieldValues) {



        var conditions = {
            show: [],
            hide: []
        };
        var otherReason = "CTC - ARV Specify Other Reason";
        var firstLineRegimeAdult = "CTC - ARV Regimens - First Line Adult";
        var secondLineRegimeAdult = "CTC - ARV Regimens - Second Line Adult";
        var firstLineRegimePediatric = "CTC - ARV Regimens - First Line Pediatric";
        var secondLineRegimePediatric = "CTC - ARV Regimens - Second Line Pediatric";
        var reasonPoorAdhere = "CTC - Reasons for Poor ARV Adherence";
        var otherReasonPoorAdhere = "CTC - Other Reasons for Poor ARV Adherence";
        var arvStatus = formFieldValues['CTC - ARV Status'];

        var adhereStatus = "CTC - ARV Adherence Status";

        console.log(arvStatus);

        var noARV="No ARV";
        var startARV="Start ARV";
        var continueARV="Continue";
        var changeARV="Change";
        var stopARV="Stop";
        var pctmc="PMTCT Prophylaxis";
        var restartARV="Restart";


        if (arvStatus == noARV) {
            conditions.show.push("CTC - ARV Reason - No Start");
            conditions.hide.push("CTC - ARV Start");

            conditions.hide.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Other Reasons");
            conditions.hide.push("CTC - ARV Regimens");

            conditions.hide.push(adhereStatus);
            conditions.hide.push(reasonPoorAdhere);
            conditions.hide.push(otherReasonPoorAdhere);


        } else if (arvStatus == startARV) {

            conditions.show.push("CTC - ARV Start");


            conditions.hide.push("CTC - ARV Reason - No Start");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Other Reasons");

            conditions.show.push("CTC - ARV Regimens");
            conditions.hide.push(adhereStatus);
            conditions.hide.push(reasonPoorAdhere);
            conditions.hide.push(otherReasonPoorAdhere);
        } else if (arvStatus == continueARV) {
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Other Reasons");
            conditions.hide.push("CTC - ARV Start");
            conditions.hide.push("CTC - ARV Reason - No Start");

            conditions.show.push("CTC - ARV Regimens");
            conditions.hide.push(otherReason);
            conditions.show.push(adhereStatus);
            conditions.show.push(reasonPoorAdhere);
            conditions.show.push(otherReasonPoorAdhere);


        } else if (arvStatus == changeARV) {
            conditions.show.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.show.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.show.push("CTC - ARV Reason - Change or Stop because of Other Reasons");
            conditions.hide.push("CTC - ARV Start");
            conditions.hide.push("CTC - ARV Reason - No Start");

            conditions.show.push("CTC - ARV Regimens");
            conditions.show.push(adhereStatus);
            conditions.show.push(otherReasonPoorAdhere);
            conditions.show.push(reasonPoorAdhere);
        } else if (arvStatus == stopARV) {
            conditions.show.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.show.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.show.push("CTC - ARV Reason - Change or Stop because of Other Reasons");
            conditions.hide.push("CTC - ARV Start");
            conditions.hide.push("CTC - ARV Reason - No Start");


            conditions.hide.push("CTC - ARV Regimens");
            conditions.show.push(adhereStatus);
            conditions.show.push(reasonPoorAdhere);
            conditions.show.push(otherReasonPoorAdhere);
        } else if (arvStatus == restartARV) {
            conditions.show.push("CTC - ARV Start");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Other Reasons");

            conditions.show.push("CTC - ARV Regimens");
            conditions.show.push(adhereStatus);
            conditions.show.push(reasonPoorAdhere);
            conditions.show.push(otherReasonPoorAdhere);
        } else if (arvStatus == pctmc) {
            conditions.show.push("CTC - ARV Start");
            conditions.hide.push("CTC - ARV Reason - No Start");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Other Reasons");

            conditions.show.push("CTC - ARV Regimens");

            conditions.hide.push(firstLineRegimeAdult);
            conditions.hide.push(secondLineRegimeAdult);
            conditions.hide.push(firstLineRegimePediatric);
            conditions.hide.push(secondLineRegimePediatric);
            conditions.show.push(adhereStatus);
            conditions.show.push(reasonPoorAdhere);
            conditions.show.push(otherReasonPoorAdhere);
        } else {

            conditions.hide.push("CTC - ARV Reason - Change or Stop because of TB or Adverse Reaction");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Treatment Failure");
            conditions.hide.push("CTC - ARV Reason - Change or Stop because of Other Reasons");
            conditions.hide.push("CTC - ARV Regimens");
            conditions.hide.push("CTC - ARV Start");
            conditions.hide.push("CTC - ARV Reason - No Start");


        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'ARV Reason - No Start': function(formName, formFieldValues) {

        var conditions = {
            show: [],
            hide: []
        };
        var arvReason = formFieldValues['ARV Reason - No Start'];

        if (arvReason == "99 - Patient fulfils criteria but does not start for other reason") {
            conditions.show.push("ARV Specify other reason");

        } else {
            conditions.hide.push("ARV Specify other reason");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'CTC - ARV Adherence Status': function(formName, formFieldValues) {
        var conditions = {
            show: [],
            hide: []
        };

        var arvAdherencestatus = formFieldValues['CTC - ARV Adherence Status'];

        if (arvAdherencestatus == "2 P(Poor) - 2 or more missed days") {
            conditions.show.push("CTC - Reasons for Poor ARV Adherence");

        } else {
            conditions.hide.push("CTC - Reasons for Poor ARV Adherence");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'CTC - Reasons for Poor ARV Adherence': function(formName, formFieldValues) {
        var conditions = {
            show: [],
            hide: []
        };

        var poorARVAdherence = formFieldValues['CTC - Reasons for Poor ARV Adherence'];

        if (poorARVAdherence == "13 - Other (Specify)") {
            conditions.show.push("CTC - Other Reasons for Poor ARV Adherence");

        } else {
            conditions.hide.push("CTC - Other Reasons for Poor ARV Adherence");
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
    },
    'TB - Reason for Examination': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var examinationReason = formFieldValues['TB - Reason for Examination'];
        var diagnosis = "TB - Reason for Examination, Diagnosis Option";
        var followup = "TB - Reason for Examination, Follow-up, Month";

        console.log(examinationReason);

        if (examinationReason == "TB - Reason for Examination, Diagnosis") {
            conditions.show.push(diagnosis);
            conditions.hide.push(followup);

        } else {
            conditions.show.push(followup);
            conditions.hide.push(diagnosis);
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },




    'HIV Vitals': function(formName, formFieldValues, patient) {
    //'Chief Complaint Data' concept when edited, triggers this function
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
    	'TB - Reffered by': function(formName, formFieldValues, patient) {
            var conditions = {show: [], hide: []};
            var other = formFieldValues['TB - Reffered by'];
            var variable = "TB - Specify";
            if(other =="Others(Specify below)") {
                conditions.show.push(variable)
            } else {
                conditions.hide.push(variable)
            }
            return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
        },
     'TB - CPT': function(formName, formFieldValues, patient) {
    //'Chief Complaint Data' concept when edited, triggers this function
            var conditions = {show: [], hide: []};
            var other = formFieldValues['TB - CPT'];
            var variable = "TB - CPT - Start Date";
            if(other =="TB - CPT - Yes")
    		{
                conditions.show.push(variable)
            } else {
                conditions.hide.push(variable)
            }
            return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
        },
    	 'TB - ART drugs': function(formName, formFieldValues, patient) {
    //'Chief Complaint Data' concept when edited, triggers this function
            var conditions = {show: [], hide: []};
            var other = formFieldValues['TB - ART drugs'];
            var variable = "TB - ART - Start Date";
            if(other =="TB - ART - Yes")
    		{
                conditions.show.push(variable)
            } else {
                conditions.hide.push(variable)
            }
            return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
        },

    	'TB - Classification by history of treatment': function(formName, formFieldValues, patient) {
    //'Chief Complaint Data' concept when edited, triggers this function
            var conditions = {show: [], hide: []};
            var other = formFieldValues['TB - Classification by history of treatment'];
            var variable = "TB - Classification by history - Specify";
            if(other =="Others(Specify below)") {
                conditions.show.push(variable)
            } else {
                conditions.hide.push(variable)
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
        'Breast feeding': function(formName, formFieldValues, patient) {
                var conditions = {show: [], hide: []};
                var name = "Breast feeding";
                if (patient['gender'] == 'F') {
					conditions.show.push("CTC - Why Eligible - Pregnancy");
                    conditions.show.push("Breast feeding");
                } else {
					conditions.hide.push("CTC - Why Eligible - Pregnancy");
                    conditions.hide.push("Breast feeding");
                }

                return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
            }
            ,
            'HTC - Amekubali na Kupimwa hali ya Uambukizi wa VVU': function(formName, formFieldValues, patient) {
                            var conditions = {show: [], hide: []};
                            var validation = "HTC - Amekubali na Kupimwa hali ya Uambukizi wa VVU";
                            var majibu="HTC - Majibu ya hali ya Uambukizi wa VVU";
                            if (validation) {
                                    conditions.show.push(majibu)
                            } else {
                                    conditions.hide.push(majibu)
                            }

                            return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
                        },

           'exp-infant - Infant NVP at birth': function(formName, formFieldValues, patient) {
            var conditions = {show: [], hide: []};
            var ans = formFieldValues['exp-infant - Infact NVP at birth'];
            var variable = "exp-infant - Number of Days Dispensed";
            if(ans) {
                conditions.show.push(variable)
            } else {
                conditions.hide.push(variable)
            }
            return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
        },
      'HTC - Kuchunguzwa Kifua Kikuu': function(formName, formFieldValues, patient) {
                                                    var conditions = {show: [], hide: []};
                                                    var validation = "HTC - Kuchunguzwa Kifua Kikuu";
                                                    var majibu="HTC - Hali ya Uambukizi wa Kifua Kikuu";

                                                    if (validation) {
                                                            conditions.show.push(majibu)
                                                    } else {
                                                            conditions.hide.push(majibu)
                                                    }

                                                    return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
                                                },

              'Exposed Infant - CTX(Yes/No)': function(formName, formFieldValues, patient) {
                                var conditions = {show: [], hide: []};
                               var validation = formFieldValues['Exposed Infant - CTX(Yes/No)'];
                                 var majibu="Exposed Infant - CTX Yes";
                                 var noOfDays="Exposed Infant - CTX No of Days Dispensed";

  console.log(validation);
                                 if (validation==majibu) {
                                      conditions.show.push(noOfDays)
                                    } else {
                                 conditions.hide.push(noOfDays)
                               }

                           return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
               },
                 'TB - Request and Report, Previously Treated': function(formName, formFieldValues, patient) {
                           var conditions = {show: [], hide: []};
                           var previousTreated = formFieldValues['TB - Request and Report, Previously Treated'];
                           var specimentType = "TB - Previous Treated";
                             var testRequested = "TB - Test Requested";
                           if(previousTreated) {
                               conditions.show.push(specimentType)
                               conditions.show.push(testRequested)
                           } else {
                               conditions.hide.push(specimentType)
                                 conditions.hide.push(testRequested)
                           }
                           return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
                       },

                                               'TB - DOT - Phase Type': function(formName, formFieldValues, patient) {
                                                                          var conditions = {show: [], hide: []};
                                                                          var phaseType = formFieldValues['TB - DOT - Phase Type'];
                                                                          var RHZE = "TB - DOT - RHZE";
                                                                          var RH = "TB - DOT - RH";
                                                                          var S = "TB - DOT - S(Streptomycin)";
                                                                          var RETRRHZE = "TB - DOT - RETR - RHZE";
                                                                          var RHE = "TB - DOT - RHE";
                                                                          var RHZ = "TB - DOT - Children - RHZ";
                                                                          var E = "TB - DOT - Children - E";
                                                                          var RH = "TB - DOT - RH";

                        console.log(phaseType);
                                                                          if(phaseType=="Intensive Phase") {
                                                                              conditions.show.push(RHZE)
                                                                              conditions.show.push(S)

                                                                               conditions.show.push(E)



                                                                                             conditions.hide.push(RH)
                                                                                                 conditions.hide.push(RHE)


                                                                          } else if(phaseType=="Continuation Phase") {

                                                                               conditions.show.push(RH)
                                                                               conditions.show.push(RHZ)

                                           conditions.hide.push(RHZE)
                                                                                               conditions.hide.push(S)

                                                                                                conditions.hide.push(E)

                                                                          }else
                                                                          {
                                                          conditions.hide.push(RHZE)
                                                                                 conditions.hide.push(S)
                                                                                 conditions.hide.push(RH)
                                                                                     conditions.hide.push(RHE)
                                                                                  conditions.hide.push(E)
                                                                          conditions.hide.push(RHZ)
                                                                          }
                                                                          return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
                                                                      },

'TB - Medicine Option': function(formName, formFieldValues, patient) {
                           var conditions = {show: [], hide: []};
                           var phaseType = formFieldValues['TB - Medicine Option'];

                           var NewCase = "TB - DOT - New Case";
                           var Retreatment = "Retreatment";
                           var Children = "TB - DOT - Children";

                           var NewCaseSection="TB - New Case";
                           var RetreatmentSection="TB - Retreatment";
                           var ChildrenSection="TB - Children";

                           console.log(phaseType);

                           switch(phaseType)
                           {
                           case NewCaseSection:
                             conditions.show.push(NewCase);
                              conditions.hide.push(Retreatment);
                                 conditions.hide.push(Children);
                                 break;
                           case RetreatmentSection:
                             conditions.hide.push(NewCase);
                              conditions.show.push(Retreatment);
                                 conditions.hide.push(Children);
                                 break;
                           case ChildrenSection:
                             conditions.hide.push(NewCase);
                               conditions.hide.push(Retreatment);
                                 conditions.show.push(Children);
                                 break;
                                 default:
                                   conditions.hide.push(NewCase)
                                  conditions.hide.push(Retreatment)
                                   conditions.hide.push(Children)

                           }


                           return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
                       }

};
