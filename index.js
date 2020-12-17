// ! make some variable and assign value
let http = require('http');
let finalhandler = require('finalhandler');
let Router =  require('router');

const router = new Router()

let server = http.createServer( function(request, response) {
    router(request, response, finalhandler(request, response))
})

server.listen(3000, function(){
    console.log(http)
    // console.log('Hi, my Server already running on Port 3000 !!!!');
})

