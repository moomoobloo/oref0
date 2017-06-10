var util = require('util');

var bleno = require('bleno');

var BlenoPrimaryService = bleno.PrimaryService;

var CgmMeasurementCharacteristic = require('./cgm-measurement-characteristic');

function ContinuousGlucoseMonitoring() {
    // See https://www.bluetooth.com/specifications/gatt/viewer?attributeXmlFile=org.bluetooth.service.continuous_glucose_monitoring.xml for service definition.
    ContinuousGlucoseMonitoring.super_.call(this, {
	uuid: '181F',
	characteristics: [
	    new CgmMeasurementCharacteristic()
	]
    });
}

util.inherits(ContinuousGlucoseMonitoring, BlenoPrimaryService);

module.exports = ContinuousGlucoseMonitoring;
