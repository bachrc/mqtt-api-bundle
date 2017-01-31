'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.sensorsModifyPOST = function sensorsModifyPOST (req, res, next) {
  Default.sensorsModifyPOST(req.swagger.params, res, next);
};

module.exports.sensorsSearchGET = function sensorsSearchGET (req, res, next) {
  Default.sensorsSearchGET(req.swagger.params, res, next);
};
