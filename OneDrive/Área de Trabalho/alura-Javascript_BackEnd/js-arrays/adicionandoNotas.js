const notas = [10, 6, 8]

if (notas.length < 4) {
    notas.push(7) //Adiciona Elemento
} else if (notas.length > 5) {
    notas.pop() //Tira o ultimo elemento
}

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log("A média é: " + media);