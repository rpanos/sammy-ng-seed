'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

    /*
     TODOs

     - move some MORE logic to services
     - Maybe just remove valid for coords completely

     - move labels into one object
     - move more inits to services
     - Document code!

     */

    controller('DrawController', [
        '$scope', '$rootScope', '$location', 'exampleService', '$window', 'utilService',
        function ($scope, $rootScope, $location, exampleService, $window, utilService) {
            //$scope.resetFromPathMode = function (event) {
            //    LineDataService.firstPointSet = false;
            //    $scope.newLineObj = LineDataService.giveBlankLineObj();
            //};

            /*
             * IFF a click set has begun, let the line draw in anticipation
             *
             * TODO move some of this logic to a service?
             */
            //$scope.checkPaperHover = function (event) {
            //
            //    event = utilService.fixEvent(event);
            //
            //    if ( $scope.inClickMode && LineDataService.firstPointSet  ) {  //$scope.newPointForm.$valid &&
            //        $scope.newLineObj.x2 = event.offsetX;
            //        $scope.newLineObj.y2 = event.offsetY;
            //    }
            //}
            ////this is temp over a more all encopassing service that determines hover_paper vs hover_not_paper
            //$scope.checkRightRailHover = function (event) {
            //    if ($scope.inClickMode && LineDataService.firstPointSet ) {
            //        $scope.newLineObj.x2 = $scope.newLineObj.x1;
            //        $scope.newLineObj.y2 = $scope.newLineObj.y1;
            //    }
            //}

            // For debug only
            $scope.checkForm = function () {
                if (!$scope.newPointForm.$valid) {
                    //$scope.svgObj.strkWdth = 0;
                    //console.debug("$scope.newPointForm.$valid:", $scope.newPointForm.$valid, $scope.newPointForm.$error);
                    //$scope.newLineObj_line_class="newLineObj_line_hide";
                } else {
                    //$scope.newLineObj_line_class="newLineObj_line_show";
                    //$scope.svgObj.strkWdth = 5;  //temp - need to keep track in another obj
                }
            };

            $scope.handleExampleClick = function (event) {
                // Deliberate de-coupling
                $scope.stuff = exampleService.exampleFunc(couple, aurgs);
            };


            // TODO make this generic for learning purposes
            $scope.$watch('drawMode', function() {
                if ($scope.drawMode == 'path') {
                    $scope.inClickMode = true;
                    $scope.pathMode = true;
                } else if ($scope.drawMode == 'segment') {
                    $scope.inClickMode = true;
                    $scope.pathMode = false;
                    $scope.resetFromPathMode();

                } else if ($scope.drawMode == 'convert') {
                    $scope.inClickMode = false;
                    $scope.pathMode = false;
                    $scope.resetFromPathMode();

                } else {
                    console.log("NO or wrong drawMode ?")
                }
            });

            $scope.handleRadiusLineClick = function () {
                //TBD
            }

            ///**
            // * Adds the current proposed line to the list of line segments.  This is currently used by
            // * both the
            // *
            // * @param {fromPrev} boolean for whether the next line starts at the end of this added line
            // * @return {Circle} The new Circle object.
            // */
            //$scope.submitAddForm = function (fromPrev) {
            //    fromPrev = fromPrev || $scope.pathMode;
            //    if ($scope.newPointForm.$valid) {
            //
            //        $scope.newLineObj=LineDataService.addLine(angular.copy($scope.newLineObj), fromPrev);
            //        console.debug("RETURNED NEW obj:" + $scope.newLineObj.x1);
            //        console.debug( $scope.newLineObj );
            //        $scope.lineObjects = LineDataService.lineObjects;  //TODO .getLineObjects();
            //        console.debug($scope.lineObjects);
            //
            //    }
            //};

            // Called at partial root
            $scope.init = function() {


            };

            angular.element(document).ready(function () {

                //Init stuff

            });
        }]);