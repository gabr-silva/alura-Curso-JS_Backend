const notas = [10, 6.5, 8, 7.5];

/*
    let somaDasNotas = 0
    for (let i= 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    console.log(`A média das notas é: ` + somaDasNotas / notas.length);
*/


//para cada elemento de 'notas' execute o seguinte codigo
let somaDasNotas = 0
for(let nota of notas) {
    somaDasNotas += nota
}
//console.log(`A média das notas é: ` + somaDasNotas / notas.length);


notas1 = [10, 10, 10, 9]

notas1.forEach((nota) => {
    console.log(nota);
});