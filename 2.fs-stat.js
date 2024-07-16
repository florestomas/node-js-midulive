// fs - File System     Sistema de archivos
const fs = require('node:fs'); //Node16> antes del modulo se RECOMIENDA node:

/*
fs se puede usar asincrono o sincrono jujuuu

.stat para leer
*/
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(),
    stats.isSymbolicLink(), // si es un enlace simbolico (https)
    stats.size,  // size en bytes
)