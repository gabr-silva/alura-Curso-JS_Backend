const cliente= require('./clientes.json')

function ordenarLista(lista, propriedades) {
    const resultado = lista.sort((a, b) => {
        if(a[propriedades] > b[propriedades]){
            return +1;
        }
        if(a[propriedades] < b[propriedades]) {
            return -1
        }
        return 0
    })

    return resultado
}


const ordenadoNome = ordenarLista(cliente, 'nome')

console.log(ordenadoNome);