const path = require('path')
const os = require('os')
const EventEmitter = require('events')
const emitter = new EventEmitter()
const fs = require('fs')

var pathObj = path.parse(__filename)
console.log(pathObj)
 console.log(os.totalmem(),os.freemem())

console.log(fs.readdirSync('./'))
console.log(fs.readdir('./',(err,files)=>{
    if (err) console.log(err)
    else console.log(files)

}))


//Register
emitter.on('messageLogged',()=>{
    console.log('listener called')
})
//raise an event
emitter.emit('messageLogged')
