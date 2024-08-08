const http = require('node:http')


/*
GET - QUIERO VER LA RESPUESTA Y LOS DATOS
HEAD - QUIERO VER LA RESPUESTA
POST - CREAR ENTIDAD DE UN RECURSO
PUT - REEMPLAZAR UN RECURSO Q YA EXISTE // MODIFICAR**
DELETE - ELIMINAR UN RECURSO
OPTIONS - DESCRIBE LOS RECURSOS Q HAY
PATCH - MODIFICAR TMB
*/


//commonJS se puede importar .json
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Conteent-Type', 'text/html; charset = utf-8')
                    return res.end(JSON.stringify(dittoJSON))

                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset = utf-8')
                    return res.end('<h1>404</h1>')
            }

        case 'POST':
            switch (url) {
                case '/pokemon': { // Este case va con parentesis porq si no toma cualquiero cosa
                    let body = ''

                    req.on('data', chunk => {
                        body += chunk.toString()
                    })

                    req.on('end', () => {
                        const data = JSON.parse(body)

                        res.writeHead(201, { 'Content-Type': 'application/json; charset = utf-8' })
                        res.end(JSON.stringify(data))
                    })
                }
                    break

                default: {
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/plain')
                    return res.end('<h1>404 ACM1PT</h1>')
                }
            }

    }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
    console.log('server listening on port http://localhost:1234')
})
