//  Job.js
var util = require('util')
var Job = function Job() {
    //  ...
    this.process = function () {
        //  ...
        this.emit('done', {completeOn: new Date()})
    }
}

util.inherits(Job, require('events').EventEmitter)
module.exports = Job