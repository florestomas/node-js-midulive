/*
    .js -> por defecto utiliza commonJS
    .mjs -> para utilizar ES Modules
    .cjs -> para utilizar ComonJS

    c, c++
*/

import { sub , mult} from './sum.mjs'

console.log(sub(4,5))
console.log(mult(4,5))