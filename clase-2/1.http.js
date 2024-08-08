const fs = require('node:fs')
const http = require('node:http') /* Protocolo http

es el protocolo de transferencia de hipertexto (Hypertext Transfer Protocol)

request - url,headres, method (GET),body    PETICION
response = statusCode, headers, body        RESPUESTA

statusCode  http.cat
100-199: Respuestas INFORMATIVAS
200-299: Respuestas SATISFACTORIAS
300-399: Redirecciones
400-499: Errores del cliente
500-599: Errores del servidor;
*/

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    console.log('request received: ', req.url) // este console.log lo vemos en nuestra terminal
    // 
    res.setHeader('Content-Type', 'text/html; charset = utf-8')
    if (req.url === '/') {
        res.statusCode = 200 // OK;
        // Cabecera
        res.end('<h1>Bienvenido a mi pagina de inicio SAPEE</h1>')
    } else if (req.url === '/kkkk.jpg') { // Para cargar una imagen
        res.setHeader('Content-Type', 'image/png')
        fs.readFile('./kkkk.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>')
            } else {
                res.setHeader('Content-Type', 'image/jpg')
                res.end(data)
            }
        })
    }
    else if (req.url === '/contacto') {
        res.statusCode = 200 // OK
        res.end('Contacto')
    }
    else {
        res.statusCode = 404 // ERROR
        res.end('404')
    }
}


const server = http.createServer(processRequest)


server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
    /*
    server listening on port http://localhost:1234
    request received
    request received

    En la consola aparece repetido 2 veces "request received", pasa que google autommaticamente hace 2 request
    */
})