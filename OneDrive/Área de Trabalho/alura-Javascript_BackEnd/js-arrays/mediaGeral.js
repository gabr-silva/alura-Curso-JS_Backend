const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const SomaNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0) //valor inicial do acumulador

    const media = SomaNotas / notasDaSala.length

    return media
}

console.log(`Media JS: ${calculaMedia(salaJS)}`);
console.log(`Media Java: ${calculaMedia(salaJava)}`);
console.log(`Media Python: ${calculaMedia(salaPython)}`);