const dados = require('./cliente.json')

console.log(dados);

const clienteEmString = JSON.stringify(dados) //converte objeto em string

console.log(clienteEmString);

console.log(JSON.parse(clienteEmString)); //converte string em objeto