 
 //fazendo um array com numeros (impares) e numeros (pares).
 var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log("Imprimindo fonte de dados (array) original.");
 console.log(numeros);

 /**
  * Lembrando que o (modulo %) trás o resto da divisão.
  * se o numero por dividido (/) por (2) o (resto) for igual (0) o numero do array é par....
  * se numero for dividido por 2 e o (resto) for (diferente de zero) o numero do (array) é impar.
  * se o numero dividido por 5 o resto for igual a zero (0) este numero é (multiplo de 5)
  */


function filtrar_pares(parametro){
  //Lembrando que o return é (true) ou (false) ele retorna um boleano
  //Se numero do que esta vindo da fonte de dados do array for (true)
  //ele entrar no novo array gerado pelo filter.
  //exemplo 2 é para (true) este numero entra no array gerador pelo filter.
  return parametro % 2 === 0;
}

function filtrar_impares(outroParametro){
  return outroParametro % 2 !== 0; 
}

function filtrar_multiplos_5(parametroMultiplo){
  return parametroMultiplo % 5 === 0; 
}

console.log("==========================================================");
console.log("==========================================================");
console.log("========Esta foi as formas utilizadas nas funções=========");
console.log("===[Lembrando que o (modulo %) trás o resto da divisão]===");
console.log("===[se o numero por dividido (/) por (2) o (resto) for igual (0) o numero do array é par]===");
console.log("===[se numero for dividido por 2 e o (resto) for (diferente de zero) o numero do (array) é impar===]");
console.log("===[se o numero dividido por 5 o resto for igual a zero (0) este numero é (multiplo de 5)===]");
console.log("====================================================================================================");
//Curiosidade utilizando a mesma variavel ret sem limpar

//filtrando os numeros pares.
//lembrando que estou passando a função dentro do filter sem paramentro.
var ret = numeros.filter(filtrar_pares);
console.log("Filtrando numeros pares!");
console.log(ret);

ret = numeros.filter(filtrar_impares);
console.log("Filtrando numeros impares!");
console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
console.log("Filtrando numeros multiplos de 5");
console.log(ret);

console.log("==========================================================================");

/**
 * Retorno da compilação no console..
 * 
 * 
 * Imprimindo fonte de dados (array) original.
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Filtrando numeros pares!
[ 2, 4, 6, 8, 10 ]
Filtrando numeros impares!
[ 1, 3, 5, 7, 9 ]
Filtrando numeros multiplos de 5
[ 5, 10 ] 

 */



 //Montar um array de objetos
console.log("===================================================================");
console.log("===Criamos um array de objetos java script que tem chave e valor===");
console.log("===================================================================");
 var alunos = [
  {nome: 'Pedro', nota: 8.5},
  {nome: 'Maria', nota: 10},
  {nome: 'Fernanda', nota: 9.2},
  {nome: 'Ricardo', nota: 7.3}
 ]
 console.log("===[Um objeto js de array]===");
 console.log(alunos);

 function filtrar_notas_maiores_que_8(aluno){
  return aluno.nota > 8;
 }
/**
 * Veja o fluxo !!!
 * 
 * Quando eu passo na (linha 98) var filtrados = alunos.filter(filtrar_notas_maiores_que_8);
 * alunos é o array
 * o filter passo a função dentro filtrar_notas_maiores_que_8
 * Já o parametro é cada linha do objeto do array exemplo
 * Ele vai 1º linha Pedro "pega a nota e trás para função" 
 * para verificar se esta nota é maior que > 8.
 * se o retorno que booleano for true ele inseri no novo array do filter...
 * 
 */
 var filtrados = alunos.filter(filtrar_notas_maiores_que_8);
 console.log("===[Notas maiores que > 8 =  filter monta um novo array]===");
 console.log(filtrados);

 console.log("===================================================================");

 //Tanto o filter como o map gera um novo array
 //O map transforma os valores e gera um novo array, mas (sempre) com o mesmo tamanho do array original
 //Já o filter gera um novo array e possivelmente o array terá um menor tamanho que o array original.


 //Aula 37 aprendendo a utilizar reduce...
