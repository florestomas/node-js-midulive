/*
Express es una BIBLIOTECA para hacer web, https DOU

Esta basado mas en las rutas
*/

const express = require('express') // Asi puedo usar express
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()

app.disable('x-powered-by') // esto lo ponemos para que en el POST no se vea que usamos EXPRESS y nos jakien

/*
app.use((req, res, next) => {  // Esto es mi MIDDLEWARE - donde va a recibir el 1er request
    console.log(`Mi first middlware`)

    // Trackear la request a la base de datos
    // Revisar si el usuario tiene cookies
    next()
})
*/

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('<h1>Mi paginopolis</h1>') // No usamos content-Type porque te lo entiende EXPRESS
})

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})

// Con esta orden .use manejamos todos las URLS q no sapeen
app.use((req, res) => {
    res.status(404).send('<h2>404</h2>')
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`) // es HTTP no HTTPS bobi
})


