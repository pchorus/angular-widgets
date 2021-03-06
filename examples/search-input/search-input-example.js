/*global angular */
/*jslint indent: 2, regexp: true, unparam: true */

angular.module('search-input-example', ['angular-widgets', 'ngResource', 'ngMockE2E']).run(function ($httpBackend) {
  'use strict';

  $httpBackend.whenGET(/quicksearch\/(.*)/).respond(function (method, url) {
    var ret,
      pattern;

    pattern = url.substring(url.lastIndexOf('/') + 1);
    ret = [{
      "id": "qr1",
      "title": pattern,
      "quickinfo": "Additional info 1",
      "href": "#/" + pattern
    }, {
      "id": "qr2",
      "title": "Quick Result 2",
      "quickinfo": "Additional info 2",
      "href": "#/qr2"

    }, {
      "id": "qr3",
      "title": "Quick Result 3",
      "quickinfo": "Additional info 3",
      "href": "#/qr3"
    }];

    return [200, ret, {}];
  });

});
