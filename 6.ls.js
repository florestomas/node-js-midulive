/*
ls - viste en la consola cunado navegas entre carpetas, ls te muestra los archivos/carpetas q hay
*/

const fs = require('node:fs/promises')

//.readdir - lee el directiorio actual
// maneja un callback despues de la comma. SIEMPRE EL ERROR ES EL 1ER PARAMETRO
fs.readdir('.', (err, files) => {
    if(err){
        console.error('Error al leer el directorio: ', err)
    }

    files.forEach(file => {
        console.log(file)
    })
})