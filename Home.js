var events = require('events');
var eventEmitter = new events.EventEmitter();
var bell = new require('./Bell.js').Bell();
var door = new require('./Door.js').Door();


//  Add listener
eventEmitter.on('ringringring', bell.listenerRing);
eventEmitter.on('open', door.listenerOpen);

//  Ring the bell
eventEmitter.emit('ringringring');

//  Open the door
eventEmitter.emit('open');


eventEmitter.removeAllListeners()