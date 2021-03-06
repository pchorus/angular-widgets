/*jslint indent: 2, nomen: true */
/*global angular, describe, beforeEach, it, expect, inject */

/**
 * Testing the utils
 */

describe('Utils', function () {
  'use strict';

  var Utils;

  beforeEach(angular.mock.module('angular-widgets'));

  beforeEach(inject(function (_Utils_) {
    Utils = _Utils_;
  }));

  describe('assert()', function () {
    it('should throw Error when condition is false', function () {
      expect(function () { Utils.assert(false, 'Error thrown'); }).toThrow(new Error('Assert failed: Error thrown'));
    });

    it('should not throw Error when condition is true', function () {
      expect(function () { Utils.assert(true, 'Error thrown'); }).not.toThrow(new Error('Assert failed: Error thrown'));
    });
  });
});
