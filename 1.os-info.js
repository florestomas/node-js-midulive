/* En node se puede al ser un entorno de ejecicion, nos dan muchos MODULOS NATIVOS

*/

const os = require('node:os') // Modulo nativo sistea opertativo

console.log('Informacion del sistema operativo')
console.log('---------------------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('arquitectura del sistema operativo', os.arch())
console.log('CPUs', os.cpus()) //  para saber cuantos nucleos teneos y asignar a la aplicacion q desarrollemos
console.log('uptime', os.uptime() / 60 / 60)
