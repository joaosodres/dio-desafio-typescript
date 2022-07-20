let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'ola';
anyEstaDeVolta = true;
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';
stringTeste2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}

function jogaErro(error: string, codigo: number): never  /** codigo nunca finalizado */ {
    throw { error: error, code: codigo };
}

jogaErro('deu erro', 500);