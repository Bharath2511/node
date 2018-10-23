const path = require('path')
const os = require('os')

var pathObj = path.parse(__filename)
console.log(pathObj)
 console.log(os.totalmem(),os.freemem())

