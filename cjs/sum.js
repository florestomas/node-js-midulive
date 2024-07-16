// CommunJs require module  (cjs)
// Node FORMA CLASICA exportar este Modulo

function sum(a,b) {
    return a+b
}

module.exports = { // Se crea una llave con las funciones que quiero importar
    sum
}

