const path = require('path')
const os = require('os')
//const EventEmitter = require('events')
//const emitter = new EventEmitter()
const fs = require('fs')

var pathObj = path.parse(__filename)
console.log(pathObj)
 console.log(os.totalmem(),os.freemem())

console.log(fs.readdirSync('./'))
console.log(fs.readdir('./',(err,files)=>{
    if (err) console.log(err)
    else console.log(files)

}))



const Logger = require('./logger')
const logger = new Logger()

//Register
logger.on('messageLogged',(arg)=>{
    console.log('listener called',arg)
})


//Register
logger.on('logging',(arg)=>{
    console.log('listener called',arg)
})


logger.log('message')

