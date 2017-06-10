var bleno = require('bleno');
var CgmService = require('../lib/ble/cgm-service');

var primaryService = new CgmService();

bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn') {
	bleno.startAdvertising('OpenAPS', [primaryService.uuid]);
    } else {
	bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', function(error) {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (!error) {
	bleno.setServices([primaryService], function(error){
	    console.log('setServices: '  + (error ? 'error ' + error : 'success'));
	});
    }
});
