/*
Modulo nativo: path

Aca construimos nuevas rutas de archvvios, ver su terminacion tambien
*/

const path = require('node:path')

console.log(path.sep) /*Nos devuelve el manejo entre carpetas
    windows => \
    mac => /
*/


// .join - unir rutas
const filePath = path.join('.','content','subfolder','test.txt')
console.log(filePath)

// .basename - que te devuelva solo el archivo final con su terminacion
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

// -para que te devuelva SOLO EL NOMBRE
const filename = path.basename('/tmp/midu-secret-files/password.txt','.txt')
console.log(filename)

// .extname- te devuelve la extension del archivo
const extension = path.extname('sape.dou.png')
console.log(extension)