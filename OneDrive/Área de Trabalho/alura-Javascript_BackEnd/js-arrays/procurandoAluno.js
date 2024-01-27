const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const medias = [10, 8, 7.5, 9]

const listaAlunosMedias = [alunos, medias]

function ExibirNome(aluno) {
    if (listaAlunosMedias[0].includes(aluno)) {

        //const alunos = listaAlunosMedias[0]
        //const medias = listaAlunosMedias[1]
        const [alunos, medias] = listaAlunosMedias; //desestruturação de um array

        const media = medias[alunos.indexOf(aluno)]

        console.log(`${aluno} tem a média: ${media}`);
    } else {
        console.log('Aluno não encontrado');
    }
}

ExibirNome('Ana')