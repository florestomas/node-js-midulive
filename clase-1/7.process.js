
//process - es un objeto q tiene propiedades y mmetodos del proceso actual en Node.js


console.log(process.argv) // argv - los argumentos q va recibir
/*
[
node 7.process.js sapeeee douy -jujuuu   
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\workspace\\node-js-midulive\\7.process.js',
  'sapeeee',
  'douy',
  '-jujuuu'
]
*/

// podemos controlar eventos del proceso
process.on('exit', ()=>{
    // deletes[];
})

// current working directory (CWD) - Nos dice desde donde estamos ejecutando el proceso
const cwd = process.cwd();
console.log(cwd)


// .env VARIABLES DE ENTORNO
// PEPITO=hola node 7.process.js
console.log(process.env.PEPITO)


process.exit(1) // 0: OK - 1:mmala alli

