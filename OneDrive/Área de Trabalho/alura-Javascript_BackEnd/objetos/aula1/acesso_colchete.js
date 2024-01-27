const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '1122233345',
}

console.log(`O nome do cliente é ${cliente["nome"]}, ${cliente["idade"]} anos`);

console.log(`Os 3 primeiros digitos do CPF são: ${cliente["cpf"].substring(0, 3)}`);