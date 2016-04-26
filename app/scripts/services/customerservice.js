'use strict';

/**
 * @ngdoc service
 * @name membershipSoftwareKioskApp.customerService
 * @description
 * # customerService
 * Service in the membershipSoftwareKioskApp.
 */
angular.module('membershipSoftwareKioskApp')
  .service('customerService', function ($http, $log, ENV, $q) {
    function getCompleted(response) {
      return response.data;
    }

    function getFailed(error) {
      $log.error('XHR failed for get customer by card code. ' + error.data);
      return $q.reject(error);
    }

    function getCustomerByCardCode(cardCode) {
      return $http.get(ENV.apiEndpoint + '/v1/customers/search/findByCardsCode?code=' + cardCode)
        .then(getCompleted, getFailed);
    }

    return {
      getCustomerByCardCode: getCustomerByCardCode
    };
  });
