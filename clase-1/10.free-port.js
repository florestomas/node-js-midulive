// ademas del http existe el net
const net = require('node:net')

function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject) => {

        const server = net.createServer()

        server.listen(desiredPort, () => {  // Esta funcion es un bucle que devuelve cuando encuentra el desiredPort
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err);
            }
        })
    })
}

module.exports = { findAvailablePort }