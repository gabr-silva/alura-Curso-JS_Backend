const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['115555550', '1144444440']
}
cliente.endereco = {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934'
}

for (let i in cliente) {
    let tipo = typeof cliente[i]

    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${i} tem valor ${cliente[i]}`);
    }
   
}