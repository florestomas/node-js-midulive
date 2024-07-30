const http = require('node:http')

const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

/*
http.createServer pide una REQUEST (req) y entrega una RESPUESTA (res)
*/
const server = http.createServer((req, res) => {
    console.log('request received') // este console.log lo vemos en nuestra terminal
    res.end('Hola mundo')
})

/*
// .listen (PUERTO, callback)
server.listen(0, () => {  // Con el puerto 0 va a encontrar el 1er puerto disponible
    console.log(`server listening on port http://localhost:${server.address().port}`)
})
*/

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    })
})