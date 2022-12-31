/**
 * Lembre: As funções em Java Script são chamados de (cidadão de 1º classe).
 * (cidadão de 1º classe) significa que podemos usa-la como tipos de dados de programação.
 * 
 * O que é uma função?
 * função é ação.
 * Na função..
 * posso passar parametro
 * o escopo é o que esta dentro das chaves {}
 * lembrando que dentro das chaves esta o que a função vai execultar.
 * 
 */

function somar(num1, num2){
  //esta função irá somar os valores ou paramentros de entrada.
  //e retorno este resultado ou soma.
  return num1 + num2;
}
let res = somar(8, 2);
console.log("===================");
console.log("1º forma de mostrar");
console.log(res);
console.log("===================");
console.log("2º forma de mostrar");
console.log(somar(10, 5));
console.log("===================");

/**
 * RETORNO DO EXEMPLO
 * ===================
1º forma de mostrar
10
===================
2º forma de mostrar
15
===================
 * 
 */

//veja que posso receber a função com  (const, let, var).
//observe que eu não passo assim somar() eu passo somente o nome da função somar();
const execultar = somar;
console.log("recebendo a função em um (var, let, const)");
console.log(execultar(10, 10));

/**
 * Quando eu quero execultar uma função, ai eu passo com parenteses.
 * somar();
 * Quando eu quero passar uma função como parametro, coloco somente o nome da função somar
 * 
 */

function subtrair(num1, num2){
  return num1 - num2;
}

/**
 * 
 * Lembrando: no parametro que esta escrito funcao poderia ser qualquer outro nome ou letra no paramento.
 * 
 * 
 */
function faz_algo(num1, num2, funcao){
    return funcao(num1, num2);
}
console.log("===============================================");
console.log("===Exemplo-2 passando função como parametro===");
console.log("===[ usando paramentro para passar funçaõ ]===");
console.log(faz_algo(5, 5, somar));
console.log(faz_algo(8, 3, subtrair));
console.log("===============================================");

/**
 * 
 * Neste exemplo eu estou criando uma função para chamar outra.
 * 
 */
console.log("===================================================================");
console.log("====Neste exemplo eu estou criando uma função para chamar outra.===");
console.log("===================================================================");

//estamos passando em um função(funcao)
function outra(qualquerNomeOuLetra){
  //aqui será retornado uma função.
   return qualquerNomeOuLetra;
}

const ret = outra(somar);
console.log(ret(8, 3));

console.log("===================================================================");

/**
 * Conceitos para estudar 
 * 
 * Cidadãos de Primeira Classe.
 * First-Class Citizens
 * 
 * Higner Order Functions
 * 
 */

/**
 * Esta mensagem tem algum retorno 
 * quando a função não retorna nada na verdade ela retorno undefind
 * 
 * por isto só chamamos a função mensagem ela já tem o retorno undefind.
 * 
 * Só temos retorno explicito, quando colocamos o return..
 * 
 */

function mensagem(){
  console.log('Sejá bem vindo woto-informática!')
}

mensagem();

/**
 * 
 * mostrando qual é o tipo de dado de um array
 * atraves de um for usando typeof();
 * 
 */
console.log("===================================================================");
console.log("===[varrendo o array valores e trazendo o tipo de cada um deles]===");
console.log("===================================================================");
let valores = [1, 3.4, true, somar];
for(i = 0; i < valores.length; i++){
   console.log(typeof(valores[i]));
}
console.log("===================================================================");

console.log("===================================================================");
console.log("===[varrendo o array, para mostrar o indice os valores e a função]===");
console.log("===================================================================");
valores = [1, 3.4, true, somar];
for(i = 0; i < valores.length; i++){
   console.log(i + ' ' + valores[i]);
}
console.log("===================================================================");


