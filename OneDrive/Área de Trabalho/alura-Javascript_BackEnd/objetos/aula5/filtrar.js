const cliente = require('./clientes.json')

function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter(cliente => {
//              verifica se apartemento é true      verifica se existe complemento
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty('complemento'))
    })
}

const filtrados = filtrarApartamentoSemComplemento(cliente)

console.log(filtrados);