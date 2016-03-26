'use strict';
/*global
  SockJS
*/

/**
 * @ngdoc overview
 * @name membershipSoftwareKioskApp
 * @description
 * # membershipSoftwareKioskApp
 *
 * Main module of the application.
 */
angular
  .module('membershipSoftwareKioskApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'AngularStompDK'
  ])
  .config(function ($routeProvider, ngstompProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    ngstompProvider
      .url('http://192.168.0.10:8080/front-endpoint')
      .class(SockJS);
  })
  .run(function (ngstomp, $rootScope, $interval) {
    var webSocketEndPoint = '/scanner/check-in';

    function whatToDoWhenMessageComing(message) {
      var code = angular.fromJson(message.body);
      $rootScope.$broadcast('scanEvent', code);
    }

    ngstomp.subscribe(webSocketEndPoint, whatToDoWhenMessageComing);

    //FIXME use real heartbeat
    //TODO add reconnection
    $interval(function () {
      $rootScope.$broadcast('stompConnectionStatusEvent', ngstomp.stompClient.connected);
    }, 1000);
  });
