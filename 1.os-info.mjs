/* En node se puede al ser un entorno de ejecicion, nos dan muchos MODULOS NATIVOS

*/

import { platform, release, arch, cpus, uptime } from 'node:os' // Modulo nativo sistea opertativo

console.log('Informacion del sistema operativo')
console.log('---------------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('arquitectura del sistema operativo', arch())
console.log('CPUs', cpus()) //  para saber cuantos nucleos teneos y asignar a la aplicacion q desarrollemos
console.log('uptime', uptime() / 60 / 60)
