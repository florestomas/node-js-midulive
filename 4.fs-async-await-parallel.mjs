/*
fs-async-await-parallel

Estamos leyendo los archivos en paralelos
*/
import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([text, secondText]) => {
    console.log('1er texto:', text)
    console.log('2do texto:', secondText)
})

