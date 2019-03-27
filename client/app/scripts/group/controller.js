'use strict';

angular.module('Group')
    .controller('group', function ($scope) {

        $scope.controller_loaded = 'Group loaded!';

        $scope.resolverLista = function (pEst, pLon) {
            console.log('pares 1 =', pEst, 'pares 2 =', pLon);

            //lista para resultado
            var list = [];

            if (pEst.length === pLon.length) {

                //longitud de pares
                var ln = pEst.length;

                //lista pares de Estocolmo
                var lpEst = {};

                //lista pares de Londres
                var lpLon = {};

                //guardare como objeto cuantas veces se repite dicho par

                pEst.forEach(function (x) {
                    lpEst[x] = (lpEst[x] || 0) + 1;
                });

                pLon.forEach(function (x) {
                    lpLon[x] = (lpLon[x] || 0) + 1;
                });

                for (var i = 0; i < ln; i++) {

                    var ppEst = pEst[i];
                    var ppLon = pLon[i];

                    if (list.indexOf(ppEst) === -1 && list.indexOf(ppLon) === -1) {

                        if (lpEst[ppEst] > lpLon[ppLon]) {
                            //cuando el par de estocolmo tiene m'as parejas
                            list.push(ppEst);
                        } else if (lpEst[ppEst] < lpLon[ppLon]) {
                            //cuando el par de londres tiene m'as parejas
                            list.push(ppLon);

                        } else {
                            //cuando tienen iguales se usara un random;

                            var random = Math.random() >= 0.5;

                            if (random) {
                                list.push(ppEst);
                            } else {
                                list.push(ppLon);
                            }

                        }

                    } else {
                        console.log('Alguno de la pareja ya esta en lista');
                    }

                }

                console.log(lpEst);
                console.log(lpLon);

                console.log(list);


            } else {
                return console.error('Debe enviar los datos completos');
            }
            return list;
        };


    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/group', {
                templateUrl: 'scripts/group/views/group.html',
                controller: 'group'
            });
    });
