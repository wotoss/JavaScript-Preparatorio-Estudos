

/**
 * Reduce seria reduzir...
 * 
 */

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

console.log("=========================================================================");
console.log("===[ fonte de dados original ]===");
console.log("===[ vou utilizar for ]===");
console.log("===[ a diferença entre a estrutura de repetição]===");
console.log("===[ for e forEach]===");
console.log("===[é que o for eu consigo analisar todo os elementos do array]==");
console.log("===[ já o forEach ele faz a interação completa e trás o resultado ]===");
console.log("==========================================================================");
console.log(precos);

// criada variavel global
var soma = 0;

for(var i = 0; i < precos.length; i++){
   soma = soma + precos[i];
}
console.log(soma);

//assim que apresentar na tela vou zerar a soma;
soma = 0;
console.log("=================================");
console.log("===[ fonte de dados original ]===");
console.log("===[ vou utilizar forEach ]===");
console.log("=================================");
/**
 * Montando com forEach
 * 
 */


precos.forEach(function(valor){
  //Ou posso codificar assim tambem com mais linha => var result = soma + valor;  return result;
  soma += valor;  
});
console.log("===[feito com forEach]===");
console.log(soma);

console.log("===========================================");
console.log("=================================");
console.log("===[ montando o reduce ]===");
console.log("==[o reduce reduz o array em um só valor, este um valor é o somatorio]==");
console.log("==[lembrando que posso +,/,-,* o importante que ao final de um coleção terei um unico valor]==");
console.log("============================================");
function somar(anterior, atual){
    return anterior + atual;
    //codificando com mais linhas
    // var recendoResul = anterior + atual;
    // return recendoResul;
}
var ret = precos.reduce(somar);
console.log(ret);

/**
 * Resultado do Reduce
 * 
 * Como funciona o reduce?
 * [ 4.66, 3.78, 8.78, 1.38, 5.32 ]
 * 
 * Primeira execução:
 *  - pega os dois primeiros valores (indice 0 e indice 1), soma e retorna este valor;
 * Nas demais execuções:
 *  - pega o retorno da execução anterior e o próximo valor (indice 2...)
 * 
 * Funcionamento
 * 1 => 4.66 + 3.78 = 8.44
 * 2 => 8.44 + 9.78 = 18.22
 * 3 => 18.22 + 1.34 = 19.56
 * 4 => 19.56 + 5.32 = 25.88
 * 
 */


console.log("==========================================================================");
console.log("===[usando map com reduce]===");
console.log("============================================");
console.log("==[esta pegando o array preco fazendo o map da função adicionar_taxa]==");
console.log("==[neste caso adicionando 5 em cada valor do array]==");
console.log("==[logo depois usamos o reduce para (function somar) o valor]==");
console.log("==========================================================================");

//Exemplo map/reduce
function adicionar_taxa(valor){
   return valor  + 5
}

var ret = precos.map(adicionar_taxa).reduce(somar);
console.log("o resultado do reduce e map é: ");
console.log(ret);
console.log("==========================================================================");
console.log("==========================================================================");


console.log("=========================================================================================");
console.log("===[aplicando filter,  map e reduce]===");
console.log("============================================");
console.log("==[1º aplicamos o filter (somente) valor maior que > 4 = filter monta um novo array]==");
console.log("==[este é a parte do codigo = precos.filter(preco_maior_que_4)]==");
console.log("==[]==");
console.log("==[2º o map adicionou um taxa de 5 em cada valor do array]==");
console.log("==[map já gera outro array tranformado]==");
console.log("==[3º reduce recebe este array transformado pelo valor do map. E o reduce aplica a soma]==");
console.log("==========================================================================================");

/**
 * vamos aplicar o filter
 * 
 */
function preco_maior_que_4(valor){
   return valor > 4;
}

ret = precos.filter(preco_maior_que_4).map(adicionar_taxa).reduce(somar);
console.log(ret);

console.log("=====================================================================================");
console.log("=====================================================================================");


/**
 * ESTE É O RESULTADO DO USO DO [FOR, FOREACH, REDUCE, MAP, FILTER]
 * 
 * =========================================================================
===[ fonte de dados original ]===
===[ vou utilizar for ]===
===[ a diferença entre a estrutura de repetição]===
===[ for e forEach]===
===[é que o for eu consigo analisar todo os elementos do array]==
===[ já o forEach ele faz a interação completa e trás o resultado ]===
==========================================================================
[ 4.66, 3.78, 9.78, 1.34, 5.32 ]
24.88
=================================
===[ fonte de dados original ]===
===[ vou utilizar forEach ]===
=================================
===[feito com forEach]===
24.88
===========================================
=================================
===[ montando o reduce ]===
==[o reduce reduz o array em um só valor, este um valor é o somatorio]==
==[lembrando que posso +,/,-,* o importante que ao final de um coleção terei um unico valor]==
============================================
24.88
==========================================================================
===[usando map com reduce]===
============================================
==[esta pegando o array preco fazendo o map da função adicionar_taxa]==
==[neste caso adicionando 5 em cada valor do array]==
==[logo depois usamos o reduce para (function somar) o valor]==
==========================================================================
o resultado do reduce e map é: 
49.88
==========================================================================
==========================================================================
=========================================================================================
===[aplicando filter,  map e reduce]===
============================================
==[1º aplicamos o filter (somente) valor maior que > 4 = filter monta um novo array]==
==[este é a parte do codigo = precos.filter(preco_maior_que_4)]==
==[]==
==[2º o map adicionou um taxa de 5 em cada valor do array]==
==[map já gera outro array tranformado]==
==[3º reduce recebe este array transformado pelo valor do map. E o reduce aplica a soma]==
==========================================================================================
34.76
=====================================================================================
=====================================================================================
 * 
 * 
 */