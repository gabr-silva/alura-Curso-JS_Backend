const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['115555550', '1144444440']
}
cliente.endereco = [
    {
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934'
    }
]

function LigaParacliente(telComercial, telResidencial) {
    console.log(`Ligando para ${telComercial}`);
    console.log(`Ligando para ${telResidencial}`);
}

LigaParacliente(...cliente.telefone)

const encomenda = {
    destinadario: cliente.nome, ...cliente.endereco[0]
}
console.log(encomenda);