var url = 'http://mylogger.io/log'

function log(message) {
    //sent an http request
    console.log(message)
}

module.exports.log = log
