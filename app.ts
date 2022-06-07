const pessoa = {
    nome: 'Marcia',
    idade: 29,
    profissao: 'programadora'
}

const andre: (nome: string, idade: number, profissao: string)  {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}

const paulo: (nome: string, idade: number, profissao: string)  {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Programadora'
}

interface Estudandte extends Pessoa {
    materias: string[]
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const paulo : Pessoa {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Programadora'
}

const paula : Estudandte {
    nome: 'Paulo',
    idade: 25,
    profissao: 'Engennheira'
    materias: ['Portugues , matematica']
}

function listar(lista: string[]) {

    for (const item of lista){
        console.log(' - ', item);
        }
    }
    listar(paula.materias);