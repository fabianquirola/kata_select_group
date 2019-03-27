'use strict';

describe('Controller: select group', function () {

    beforeEach(module('Group'));

    var controller;
    var scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('group', {$scope: scope});
    }));

    describe('On instance', function () {
        /*it('should set "controller_loaded" variable in scope', function () {
          expect(scope.controller_loaded).toContain('loaded');
        });
        */
        it('should return case 1', function () {
            var result = scope.resolverLista([1009, 1017], [2011, 2011]);

            expect(result).toEqual([2011]);
        });

        it('should return case 2', function () {
            var result = scope.resolverLista([1009, 1009, 1002, 1003], [2000, 2001, 2002, 2002]);

            expect(result).toEqual([1009, 2002]);
        });
        /*
        it('should return case 2', function () {

        });
        */
    });

    describe('when going to /group', function () {

        var route, location, rootScope, httpBackend;

        beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
            route = $route;
            location = $location;
            rootScope = $rootScope;
            httpBackend = $httpBackend;

            httpBackend.when('GET', 'scripts/group/views/group.html').respond('<div></div>');
        }));

        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should use minesweeper.html and controller', function () {
            expect(route.current).toBeUndefined();

            location.path('/group');

            httpBackend.flush();

            expect(route.current.templateUrl).toBe('scripts/group/views/group.html');
            expect(route.current.controller).toBe('group');
        });
    });

});
