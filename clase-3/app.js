/*
Rest Api - Representacional Estate Transfer (Arquitectura de software) ????
2000 - Roy Fielding

Resources (Recursos) - cada recurso de identifica con una URL

Verbos HTTP - definir operaciones que se pueden realizar con los recursos (Acciones basticas(build, delete, interactuarr))

Representaciones - no todas las APIs son JSON, ej.: JSON, XML, HTML, etc... FLEXIBILIDAD

Stateless - cada solicitud al servidor debe conteener toda la informacion (EL SERVIDOR NO TIENE  MANTENER NINUN ESTADO SOBRE 
            EL CLIENTE ENTRE SOLICITUDES) si no, no es REST. si puede acceder a la base de deatos

Interfaz uniforme ????? sapen't

Separacion de conceptos - Permite que el cliente y servdor evolucionen de forma separa2

anexo: a veces se puede hacer una api que no sea REST, no pasa nati natijodaDOBLEeggDibu
*/

const express = require('express')
const crypto = require('node:crypto') // Con esto para crear IDs unicas de NODE
const app = express()


app.use(express.json()) // Middleware para que funcione el POST json req.body

const movies = require('./movies.json') // Agarro las pelis del JSON
const { validateMovie, validatePartialMovie } = require('./schemas/movies')

app.disable('x-powered-by') // desabilitar que esta hecho con express

app.get('/', (req, res) => {
    res.json({ message: 'Jelow world' })
})
/*
app.get('/movies', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*') // CORS
    // Vamos a omdificar este app.get para que nos tire 1 genero nada mais
    const { genre } = req.query   // El query nos recupera datos de la URL

    if (genre) {
        const filteredMovies = movies.filter(movie =>
            // (CASE SENSITIVE - Si es en minuscula o mayus te CAGA)movie.genre.includes(genre) // SI incluye
            movie.genre.some((aux) => aux.toLowerCase() == genre.toLowerCase())
        )
        return res.json(filteredMovies)   // Anexo, las arrowFuntion => con 1 parametro NUNCA {}
    }
    res.json(movies)
})
*/
app.get('/movies', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*') // CORS
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})

app.get('/movies/:id', (req, res) => { //:id parametro de la URL :
    const { id } = req.params // Pamaetros de la URL
    /*
    path-to-regexp - Te convierte las URL, nos la simplifica
    get(/ab(cd)?e) // abcde, abe CON ESAS RUTAS TOMARIA EL LINK
        asi muchos ejemplos...
    */
    const movie = movies.find(movie =>
        movie.id === id
    )
    if (movie) return res.json(movie)
    else res.status(404).json({ message: 'movie not found 404' })
})


app.post('/movies', (req, res) => {


    const result = validateMovie(req.body)

    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    /* METODO VIEJO, QUE NO VALIDABA UN CARAJEANO
    const {
        title,
        genre,
        year,
        director,
        duration,
        rate,
        poster
    } = req.body // Asi se trae el cuerpo de la request en el POST
    */
    const newMovie = {
        id: crypto.randomUUID(), // UUID v4 '954087ff-0a06-470d-9d87-ac4092bf00e3'
        ...result.data
    }

    movies.push(newMovie)  // Esto no seria REST, pq estamos guardando el estado en memory
    /*
    El problema de este metodo es que no VALIDAMOS los datos
    */

    res.status(201).json(newMovie) // 201 PARA CREAR UN RECURSO
})


app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body)

    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) {
        return res.status(404).json({ message: 'Movie not found' })
    }

    const updateMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updateMovie

    return res.json(updateMovie)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:1234`)
})
