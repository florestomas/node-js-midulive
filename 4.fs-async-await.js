/*
Los .mjs (enma) ECMAScript Module pueden usar await en el cuerpo
En .js se hace con una funcion autoinvocar IIFE (inmediatly Invoked Function Expression)
*/
const {readFile} = require('node:fs/promises');

//IIFE (inmediatly Invoked Function Expression)
(
    async() => {
        console.log('Leyendo el 1er archivo...')

        const text = await(readFile('./archivo.txt','utf-8'))
       
        console.log(' ---> Haciendo cosas mientras lee el text....');
        
        console.log(text);
        
    }
)()


