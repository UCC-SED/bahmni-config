'use strict';

angular.module('bahmni.common.displaycontrol.custom')
    .directive('lastVisitDisplay', ['observationsService', 'appService', 'spinner', function (observationsService, appService, spinner) {
        var link = function ($scope) {
            var conceptNames = ["WEIGHT",
                "Lab Samples",
                "Coded Diagnosis",
                "Diagnosis Certainty",
                "Bahmni Diagnosis Status"
            ];
            $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/lastVisitDisplay.html";
            spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                $scope.observations = response.data;

            }));
        };

        return {
            // restrict: 'E',
            template: '<ng-include src="contentUrl"/>',
            link: link
        }
    }]);
