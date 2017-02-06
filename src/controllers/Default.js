'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.sensorsGET = function sensorsGET (req, res, next) {
    Default.sensorsGET(req.swagger.params, res, next);
};

module.exports.sensorsSensor_idGET = function sensorsSensor_idGET(req, res, next) {
    Default.sensorsSensor_idGET(req.swagger.params, res, next);
};

module.exports.sensorsSensor_idModifyPOST = function sensorsSensor_idModifyPOST(req, res, next) {
    Default.sensorsSensor_idModifyPOST(req.swagger.params, res, next);
};
