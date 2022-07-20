"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'ola';
anyEstaDeVolta = true;
anyEstaDeVolta = 5;
let stringTeste = 'verificar';
stringTeste = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
stringTeste2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogaErro(error, codigo) {
    throw { error: error, code: codigo };
}
jogaErro('deu erro', 500);
