/*
Esto solo en los modulos nativos que no tienen promesas nativas
const {promisify} = require('node: util') // Con promisify podes usar el readFilePromse sin usar 'node:fs
const readFilePromise = promisify(fs.readFile);
*/

const fs = require('node:fs/promises')

console.log('Leyendo el 1er archivo...')

// para leer el archivo en CODIFICACION 'utf-8' text spanish
fs.readFile('./archivo.txt', 'utf-8', (err,text) => {
    console.log('1er text:', text);
})

console.log(' ---> Haciendo cocass mientras lee el text....');

console.log('Leyendo el 2do archivo...')

const secondText = fs.readFile('./archivo2.txt', 'utf-8', (err,text) => {
    console.log('2do text:', text);
})

