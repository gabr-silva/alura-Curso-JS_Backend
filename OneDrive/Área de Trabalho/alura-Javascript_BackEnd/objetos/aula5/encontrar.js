const cliente = require("./clientes.json")

function encontrar(clientes, chave, valor) {
    return clientes.find((item) => item[chave].includes(valor))
}

function encontrarLetra(letra) {
    return cliente.filter(cliente => {
        return cliente.nome.startsWith(letra.toUpperCase()) 
    })
}

console.log(encontrarLetra('c'));