
//um array de (string) cursos.
var cursos = [
  'Programação para Leigos',
  'Algoritmos e Lógica de Programação',
  'Programação em C',
  'Programação em Java',
  'Programação em Python',
  'Banco de Dados',
  'Programação Web com Django Framework',
  'Programação em JavaScript',
];

console.log("teremos o tamanho do array: " + cursos.length);

console.log("=================FOREACH SÃO ESTRUTURA DE REPETIÇÃO=============");
console.log("================================================================");
console.log("================================================================");

console.log("Adorei estratamento com forEach !!");
console.log("Vamos lá");
console.log("1º fiz a função imprimir");
console.log("2º No parametro eu posso passar");
console.log("(nome do array. curso, depois o indice pego a posição)");
console.log("O que eu não sabia é que se passar somente o nome (array) ele entende que é o array que estamos usando");
console.log("Isto significa que não precisamos passar (o nome do array e sim somente (array))");
console.log("======Dica ! O forEach aceita somente (três parametros) saindo da função ====");
console.log("================================================================");
console.log("================================================================");
/***
 * Goste muito deste porque ele passou a função dentro do forEach
 * 
 * Muito bom eu consigo passar o conteudo é a posição 
 * ou seja o (indice ou index ou posição) 
 */
//definir função
 function imprimir(curso, indice, array){
   console.log( indice + ' - ' + curso);
   //muito interressante !!
   //se você passar o nome (array) o forEach já intende que é o array
   //que esta em vigor... 
   console.log(array);
 }


/**
 * Esta parte é demais passo a função dentro do forEach
 */

/**
 * forEach => significa "para cada"
 * então eu digo "para cada elemento do meu array (imprimir) moste na tela"
 * no parametro estou passando o (curso que é o array) e tambem pegando o indice
 */
cursos.forEach(imprimir);

console.log("================================================================");
console.log("================================================================");
console.log("================================================================");
console.log("======Vamos nesta parte fazer a mesma procedimento que acima====");
console.log("=====Mas neste vamos utilizar o (template string => `${}`) =====");
console.log("================================================================");

cursos.forEach(function(cursos, indice){
   console.log(`${indice} - ${cursos}`);
});
console.log("================================================================");
console.log("================================================================");

console.log("****************************************************************");
console.log("=================FOR MAIS UM ESTRUTURA DE REPETIÇÃO=============");
console.log("================================================================");
console.log("================================================================");
console.log("======Percorrendo o array e imprimindo o conteudo e o indice====");
console.log("=================Agora !! utilizando o (for)====================");
console.log("================================================================");
/**
 * veja que o i => já tem o indice
 * concatenamos a iteração de cada um do array cursos[i]
 * e imprimimos no console.
 */
for(let i = 0; i < cursos.length; i++){
   console.log(i + ' - ' + cursos[i]);
}

console.log("================================================================");
console.log("================================================================");

/**
 * Result com indice e conteudo....
 * 
 * ================================================================
================================================================
****************************************************************
================================================================
================================================================
================================================================
======Percorrendo o array e imprimindo o conteudo e o indice====
=================Agora !! utilizando o (for)====================
================================================================
0 - Programação para Leigos
1 - Algoritmos e Lógica de Programação
2 - Programação em C
3 - Programação em Java
4 - Programação em Python
5 - Banco de Dados
6 - Programação Web com Django Framework
7 - Programação em JavaScript
================================================================
================================================================
 * 
 */