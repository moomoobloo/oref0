var util = require('util');
var os = require('os');
var exec = require('child_process').exec;

var bleno = require('bleno');

var Descriptor = bleno.Descriptor;
var Characteristic = bleno.Characteristic;

var CgmMeasurementCharacteristic = function() {
    // See https://www.bluetooth.com/specifications/gatt/viewer?attributeXmlFile=org.bluetooth.characteristic.cgm_measurement.xml characteristic definition.
    CgmMeasurementCharacteristic.super_.call(this, {
	uuid: '2AA7',
	properties: ['read'],
	descriptors: [
	    new Descriptor({
		uuid: '2901',  // User description
		value: 'CGM reading'
	    })
	]
    });
    console.log('registered characteristic');
};

util.inherits(CgmMeasurementCharacteristic, Characteristic);

CgmMeasurementCharacteristic.prototype.onReadRequest = function(offset, callback) {
    console.log('read request')
    // Return a hardcoded value for testing.
    callback(this.RESULT_SUCCESS, new Buffer([98]));
};

module.exports = CgmMeasurementCharacteristic;
