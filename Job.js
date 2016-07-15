//  Job.js
var util = require('util')
var Job = function Job() {
    var job = this
    //  ...
    job.process = function () {
        //  ...
        job.emit('done', {completeOn: new Date()})
    }
}

util.inherits(Job, require('events').EventEmitter)
module.exports = Job