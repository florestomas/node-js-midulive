
const z = require('zod') // ZOD [VALIDAR DATOVICHS]


const movieSchema = z.object({
    title: z.string({
        invalid_type_error: 'Movie title must be a string'
    }),   // Con estas validaciones tambien podes indicar cual es el error
    year: z.number().int().positive().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10).default(5),
    poster: z.string().url({
        message: 'Poster must be a valid URL'
    }),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi', 'Crime']),
        {
            required_error: 'Movie genre is required',
            invalid_type_error: 'Movie genre must be an array of enum Genre'
        }
    )
})


function validateMovie(object) {
    return movieSchema.safeParse(object)
}

function validatePartialMovie(input) {
    return movieSchema.partial().safeParse(input) // el parcial() hace todas las validaciones opcionales
}


module.exports = {
    validateMovie,
    validatePartialMovie
}