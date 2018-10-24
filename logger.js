
const EventEmitter = require('events')
//const emitter = new EventEmitter()


var url = 'http://mylogger.io/log'

class Logger extends EventEmitter {

     log(message) {
        //sent an http request
        console.log(message)
    //raise an event
    this.emit('messageLogged',{ id : 1,url :"http://"})
    //raise an event
    this.emit('logging',{module :'js'})
    
    }
}


module.exports = Logger
