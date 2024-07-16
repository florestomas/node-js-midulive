/*
para usar PROMESAS hay que
const fs = require('node:fs/promises')
*/
const fs = require('node:fs/promises')

console.log('Leyendo el 1er archivo...')

// para leer el archivo en CODIFICACION 'utf-8' text spanish
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('1er Texto:',text)
    })

console.log(' ---> Haciendo cocass mientras lee el text....');

console.log('Leyendo el 2do archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('2do Texto:',text)
    })

