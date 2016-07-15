var events = require('events')
var emitter = new events.EventEmitter()

emitter.on('knock', function() {
    console.log('Who\'s there?')
})

emitter.om('knock', function () {
    console.log('Go away!')
})

emitter.emit('knock')