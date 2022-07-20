const pessoa = {
    nome: 'Eduarda',
    idade: 28,
    profissao: 'desenvolvedora'
};

pessoa.idade = 29;

const andre: {
    nome: string,
    idade: number,
    profissao: string;
} = {
    nome: 'André',
    idade: 25,
    profissao: 'desenvolvedor'
};

const paula: {
    nome: string,
    idade: number,
    profissao: string;
} = {
    nome: 'André',
    idade: 25,
    profissao: 'Desenvolvedora'
};

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Estudante extends Pessoa {
    materiais: string[];
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao?: Profissao;
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materiais: ['Matemárica discreta', 'Programação']
};

const monica: Estudante = {
    nome: 'Mônica',
    idade: 28,
    materiais: ['Matemárica discreta', 'Programação']
};

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materiais);
