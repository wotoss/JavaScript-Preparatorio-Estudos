
//minha fonte de dados alunos

//vamos lá !

//ordenar dados
var alunos = ['Vera', 'Lucia', 'Fernanda', 'Marcio', 'Ana', 'Carla'];
console.log(alunos);
//fazendo a ordenação com sort

//ordenando arrays de string
alunos.sort();
console.log(alunos);

//este é o retorno
//fonte de dados
//[ 'Vera', 'Lucia', 'Fernanda', 'Marcio', 'Ana', 'Carla' ]
//ordenação da fonte de dados
//[ 'Ana', 'Carla', 'Fernanda', 'Lucia', 'Marcio', 'Vera' ]

//Detalhe da ordenação
/**
 * o sort considera que todos os valores do array são strings
 */

//SORT NÃO FUNCIONA PARA FLOAT, INT E OUTROS APENAS PARA ARRAYS DE STRING
console.log("===Sort não funciona para array de numeros, apenas no de string===");
var precos = [123.55, 42.27, 546.99, 23.12];
console.log(precos);

precos.sort();
console.log(precos);

console.log("===================================================================");

//VAMOS APLICAR UMA FUNÇÃO PADRÃO AI FAREMOS A ORDENAÇÃO


//var precos = [123.55, 42.27, 546.99, 23.12];
/**
 * 1º function(a, b) => "pega o valor de (a) e o valor de (b)"
 * 2º entre os dois valores ele verá quanl é o menor valor e ordena. 
 * logo vai paro outro valor e ordena, assim sucesivamente....
 * 3º exemplo => a=> 123.55, b => 42.27 "qual é o menor valor que foi pego no array" 
 * Lembrando que na ordenação o menos valor é o primeiro
 * 42.27, 
 * depois pega 42.27 e compara com o proximo valor 546.99
 * este é o primeiro 42.27 menor
 * ai pega o ultimo do array 23.12
 * Bom neste caso 42.27 entre 23.12 o valor 23.12 é menor. 
 * Então ele passa a ser o primeiro (23.12) até ordenar o array completo.
 * sem ordenação valores float => 123.55,23.12,42.27,546.99
    com ordenação valores float => 23.12,42.27,123.55,546.99

    Dica =>  ele pega o menor entre os dois e ordena.
 */
//este tipo de função é chamado de função lambda ou calback
console.log("===Agora sim colocamos o sort dentro de uma função, deu CERTO===");
console.log("sem ordenação valores float => " + precos);
precos.sort(function(a, b) { return a - b;});
console.log("com ordenação valores float => " + precos);
console.log("==================================================================");
console.log("===Sort dentro de uma função, ordenando numero reias===");
var idades = [5, 1, 8, 12, 44, 78];
console.log("sem ordenação valores int => " + idades);
idades.sort(function(a,  b) {return a - b;});
console.log("com ordenação valores int => " + idades);
