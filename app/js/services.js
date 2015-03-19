'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    factory('utilService', function () {
        return {
            isEmpty: function (value) {
                return angular.isUndefined(value) || value === '' || value === null || value !== value;
            },
            fixEvent: function( event ){
                if(event.offsetX==undefined) // this works for Firefox
                {
                    event.offsetX = event.layerX;
                    event.offsetY = event.layerY;
                }
                return event;
            }
        }
    }).
    factory('exampleService', ['utilService', function (utilService) {

        funcs.exampleFunc = function (args1, args2) {

            return stuff;
        };

        return funcs;
    }]).
    value('version', '0.1');
