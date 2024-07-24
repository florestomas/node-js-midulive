/*
Los .mjs (enma) ECMAScript Module pueden usar await en el cuerpo
En .js se hace con una funcion autoinvocar
*/
import { readFile } from 'node:fs/promises';

console.log('Leyendo el 1er archivo...')

// para leer el archivo en CODIFICACION 'utf-8' text spanish
const text = await (readFile('./archivo.txt', 'utf-8'))

console.log(text)

console.log(' ---> Haciendo cosas mientras lee el text....');
