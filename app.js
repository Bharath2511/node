const http = require('http')

const server = http.createServer((req,res)=>{ 
    if(req.url=='/') {
        res.write('hello')
        res.end()
    }
    if(req.url=='/courser') {
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})

server.listen(2500)


console.log('listening on port 2500')