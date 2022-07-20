"use strict";
const pessoa = {
    nome: 'Eduarda',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 29;
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'desenvolvedor'
};
const paula = {
    nome: 'André',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materiais: ['Matemárica discreta', 'Programação']
};
const monica = {
    nome: 'Mônica',
    idade: 28,
    materiais: ['Matemárica discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materiais);
