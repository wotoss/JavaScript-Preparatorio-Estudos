
//Deletando dados do array

var valores = [5, 1, 8, 12, 44, 78];
console.log("valores antes do delete, ou seja fontede dados completa");
console.log(valores);
delete valores[3];
//console.log("valor deletado na posição 3 seria o 12");
//console.log(valores);
//console.log("veja que passa uma mensagem de 1 item vazio");

//resultado do console
// valores antes do delete
// [ 5, 1, 8, 12, 44, 78 ]
// valor deletado na posição 3 seria o 12
// [ 5, 1, 8, <1 empty item>, 44, 78 ]
// veja que passa uma mensagem de 1 item vazio

//DETALHE EXISTE UM MÉTODO QUE DELETAMOS SEM DEIXAR A MENSAGEM DENTRO DO ARRAY
//OU A MENSAGEM VAZIA...

//A partir do indice 3, delete 1 elemento.
console.log("=======valores deletados utilizando splice, sem espaço vazio=======");
console.log("Um elemento deletado splice(3, 2) posição 3, quantidade de elemento 2");
//usando o método splice eu digo 
//na (posição [3] ou no indice ou index =:> delete (1) elemento)
//veja que desta forma não fica o empty ou espaço vazio como no exemplo acima.
valores.splice(3, 2); 
console.log(valores);

// valores antes do delete, ou seja fontede dados completa
// [ 5, 1, 8, 12, 44, 78 ]
// =======valores deletados utilizando splice, sem espaço vazio=======
// [ 5, 1, 8, 44, 78 ]


/**
 * DETALHE DE SUMA IMPORTÂNCIA 
 * se você utilizar o 1º primeiro exemplo usando o método (delete).
 * O método delete remove mas deixa o espaço vazio e no tamanho (length) do array
 * ele mostra o valor com o espaço....
 * 
 * Já quando usamos o splice(indicando a posição (3), e  quantos irá deser deletado (1) )
 * "apartir do indice splice(3, 1) digo apartir do 3º elemento delete 1 ou delete 2 duas posições"
 * e assim sucessivamente.
 * 
 * Só que neste caso o mais IMPORTANTE quando você deleta o tamanho(length) do array diminui
 * "ou seja ele retorna o tamanho real do array"
 * 
 * Vou deletar um elemento
 * 
 * valores antes do delete, ou seja fontede dados completa
[ 5, 1, 8, 12, 44, 78 ]
=======valores deletados utilizando splice, sem espaço vazio=======
Um elemento deletado splice(3, 1) posição 3, quantidade de elemento 1
[ 5, 1, 8, 44, 78 ]
 * 
 * Agora vou deletar dois elementos
 * 
 * valores antes do delete, ou seja fontede dados completa
[ 5, 1, 8, 12, 44, 78 ]
=======valores deletados utilizando splice, sem espaço vazio=======
Um elemento deletado splice(3, 2) posição 3, quantidade de elemento 2
[ 5, 1, 8, 78 ]

Ele deleta ele proprio e o outro elemento
 * 
 * 
*/

console.log("======================================================");
console.log("============Adicionando elementos com splice==========");
console.log("======================================================");
console.log(valores);//[ 5, 1, 8, 78 ]
console.log("Digo na posição(3), não delete nenhum numero(0), e começo a passar os numero que eu quero que adicione apatirda posição 3");
valores.splice(3, 0, 12, 44, 56, 89); 
console.log("===retornando ao console de forma ordena===");
valores.sort(function(a, b) { return a - b;}); //função de ordenação de numeros.
console.log(valores);

/**
 * Exemplo falado de adicionar
 * 
 * Digo na posição(3), não delete nenhum numero(0),
 * e começo a passar os numero que eu quero que adicione apatirda posição 3"
 * 
 */

console.log("======================================================");
console.log("==========Agora!! vamos deletar e adicionar===========");
console.log("================usando o splice=======================");
console.log("======================================================");
console.log("valor real da fonte de dados");
console.log(valores);
/**
 * Agora quero que na posição (3) do array delete(1) e adicione na mesma posição o (23)
 */
console.log("valor adicionado!!! o 23");
valores.splice(3, 1, 23);
console.log(valores);

/**
 * valor real da fonte de dados
[ 1,  5,  8, 12, 44, 56, 78, 89 ]
valor adicionado!!! o 23
[ 1,  5,  8, 23, 44, 56, 78, 89 ]
 * 

Lembrando que a adição com o splice seria a mesma coisa de:
Adicionar o (23) nesta posição.
valores[3] = 23
 */
console.log("============================================================");
console.log("===Se eu preciso apenas remover a ultima posição do array===");
console.log("===Se for somente a ultima posição, posso utilizar o pop====");

var sendoRemovidaUltimaPoiscao = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("array fonte de dados completa:");
console.log(sendoRemovidaUltimaPoiscao);
console.log("========================================");
sendoRemovidaUltimaPoiscao.pop();
console.log("array removida a ultima porição");
console.log(sendoRemovidaUltimaPoiscao);
console.log("========================================");

console.log("========================================");
console.log("========================================");
console.log("====O método pop remove e retorna o valor removido, CASO PRECISE DO RETORNO===");
var retornandoValorRemovida = sendoRemovidaUltimaPoiscao.pop();
console.log("valor que acabou de ser removido pelo método pop: " + retornandoValorRemovida);
console.log("=====================================================================");
console.log("======================================================================");
console.log("======================================================================");

/**
 * Resultado console
 * ============================================================
===Se eu preciso apenas remover a ultima posição do array===
===Se for somente a ultima posição, posso utilizar o pop====
array fonte de dados completa:
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
========================================
array removida a ultima porição
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
========================================
 * 
 */

console.log("============================================================");
console.log("===Se eu preciso apenas remover a 1º posição do array===");
console.log("===Se for somente a 1º posição, posso utilizar o shift======");


console.log("============================================================");
var sendoRemovendoPrimeiraPoiscao = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("====Fonte de dados completa do array====");
console.log(sendoRemovendoPrimeiraPoiscao);
console.log("=============================================");
console.log("==Primeira posição sendo removida do array => usando o método shift");
var retornoDoValorRemovido = sendoRemovendoPrimeiraPoiscao.shift();
console.log(sendoRemovendoPrimeiraPoiscao);
console.log("O valor removido por shift foi: " + retornoDoValorRemovido);
console.log("============================================================");

/**
 * RETORNO DO CONSOLE MÉTODO SHIFT
 * 
 * ===Se eu preciso apenas remover a 1º posição do array===
===Se for somente a 1º posição, posso utilizar o shift======
============================================================
====Fonte de dados completa do array====
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
=============================================
==Primeira posição sendo removida do array => usando o método shift
[
  2, 3, 4,  5, 6,
  7, 8, 9, 10
]
O valor removido por shift foi: 1
============================================================
 * 
 */

console.log("============================================================");
console.log("===Vamos adicionar na 1º posição do array já usamos splice agora será o unshift===");
console.log("===Usando unshift===");

var adicionadoComUnshift = [1, 2, 3, 4, 5];
console.log("===Fonte de dados original===");
console.log(adicionadoComUnshift);
console.log("===valor adicionado no incio do array: 99 ===");
adicionadoComUnshift.splice(0, 0, 100);
//adicionadoComUnshift.unshift(99);
console.log(adicionadoComUnshift);
console.log("============================================================");
console.log("============================================================");

/***
 * UTILIZANDO UNSHIFT PARA INSERÇÃO DA PRIMEIRA POSIÇÃO DO ARRAY
 * LEMBRANDO QUE COM splice(posiçao, delete, inserção);
 * Ficaria assim splice (0, 0, 99)
 * E daria certo da mesma forma que som unshift
 * COM O splice EU TENHO MAIS CONTROLE DO QUE DELETO OU ADICIONO NO ARRAY.... 
 * 
 */

console.log("============================================================");
console.log("===Apartir de um array existente ele monta outro array===");
console.log("===Usando slice e passando a posição do array anterior===");
console.log("============================================================");

let montandoNovoArray = [1, 2, 4, 5, 6];
console.log("Fonte de dados completa");
console.log(montandoNovoArray);
console.log("===========================");
let novoArray = montandoNovoArray.slice(3);
console.log("Novo array após ser passado a posição (3) para o slice");
console.log(novoArray);

console.log("============================================================");
console.log("============================================================");

/**
 * RETORNO DO NOVO ARRAY CRIADO PELO MÉTODO SLICE
 * 
 * ============================================================
============================================================
============================================================
===Apartir de um array existente ele monta outro array===
===Usando slice e passando a posição do array anterior===
============================================================
Fonte de dados completa
[ 1, 2, 4, 5, 6 ]
===========================
Novo array após ser passado a posição (3) para o slice
[ 5, 6 ]
============================================================
============================================================
 * 
 */

/***
 * USANDO O SLICE PARA CONSTRUIR O ARRAY DE QUALQUER PARTE DO ARRAY ORIGINAL
 * 
 * 
 */
console.log("============================================================");
console.log("===Obtendo o dado de qualquer parte do array===");
console.log("==O slice(1, 2) faz diz apartir do indice 1 pegue até o indice 2 (mas sem inclui-lo)=========");
console.log("Em outras palavras slice(apartir do indice 1,  peque a posição 2 - 1 ou seja ele pega uma posição)");
console.log("Se colocar-mos slice(1, 3) ele vai pegar (apartir do indice 1, a posição 2, porque 3 - 1 = é 2");
console.log("============================================================");

var fonteDeDados = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("array original");
console.log(fonteDeDados);
var novaFonteDeDados = fonteDeDados.slice(1, 2);
console.log("novo array usando slice(1, 2)");
console.log(novaFonteDeDados);

console.log("============================================================");
console.log("============================================================");

/**
 * ============================================================
============================================================
============================================================
===Obtendo o dado de qualquer parte do array===
==O slice(1, 2) faz diz apartir do indice 1 pegue até o indice 2 (mas sem inclui-lo)=========
Em outras palavras slice(apartir do indice 1,  peque a posição 2 - 1 ou seja ele pega uma posição)
Se colocar-mos slice(1, 3) ele vai pegar (apartir do indice 1, a posição 2, porque 3 - 1 = é 2
array original
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
novo array usando slice(1, 2)
[ 2 ]
============================================================
============================================================
 * 
 *  */ 

console.log("============================================================");
console.log("====================Concatenação de arrays==============");

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

console.log("Array pares");
console.log(pares);
console.log("array impares");
console.log(impares);
var concatenandoArrays = pares.concat(impares);
console.log("A concatenação dos arrays pares e impares");
console.log(concatenandoArrays);
console.log("============================================================");
console.log("============================================================");
console.log("Para finalizar vamos ordenar com sort e função os dois arrays");
console.log("============================================================");
console.log(concatenandoArrays.sort(function(a, b) {return a - b;}));
console.log("==================");
console.log("===Ordenação feita===");
console.log(concatenandoArrays);


/***
 * RETORNO VINDO DO CONSOLE CONCATENAÇÃO E ORDENAÇÃO
 * ============================================================
============================================================
============================================================
====================Concatenação de arrays==============
Array pares
[ 2, 4, 6, 8, 10 ]
array impares
[ 1, 3, 5, 7, 9 ]
A concatenação dos arrays pares e impares
[
  2, 4, 6, 8, 10,
  1, 3, 5, 7,  9
]
============================================================
============================================================
Para finalizar vamos ordenar com sort e função os dois arrays
============================================================
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
==================
===Ordenação feita===
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
 * 
 * 
 */

//FINAIZANDO COM TABULEIRO OU MATRIZ ARRAY ENCADEADO OU BIDMENSIONAL
console.log("============================================================");
console.log("==================Matriz OU Array Bidmensional==============");
var tabuleiro = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ];
console.log(tabuleiro);
console.log("============================================================");

/**
 * A FORMAÇÃO DESTE ARRAY É MAIS OU MENOS ASSIM
 * 
 * [
 *  
 *   [1, 2, 3, 4], //para acessar esta linha [0] 
 *   [5, 6, 7, 8], //para accessar esta linha [1]
 *   [9, 10, 11, 12], //para acessar esta linha [2]
 *   [13, 14, 15, 16] //para acessar esta linha [3]
 * 
 * e temos tambem as colunas [0], coluna [1], coluna [2], coluna [3]
 * 
 * ]
 * 1º São dois arrays, um dentro do outro, formando array bidimensional.
 * 
 */
console.log("====================");
console.log("mostrando 1, 2, 3, 4");
console.log("====================");
console.log(tabuleiro[0][0]); //1º [0] é a linha [0] coluna 
console.log(tabuleiro[0][1]); //2º [0] linha [1] coluna
console.log(tabuleiro[0][2]); //3º [0] mesma linha [2] outra coluna
console.log(tabuleiro[0][3]); //4º [0] mesma linha [3] outra coluna
console.log("====================");
console.log("mostrando 5, 6, 7, 8");
console.log("====================");
console.log(tabuleiro[1][0]);// proxima linha [1] e coluna [0]
console.log(tabuleiro[1][1]);// mesma linha [1] outra coluna [1] 
console.log(tabuleiro[1][2]);// mesma linha [1] outra coluna [2] 
console.log(tabuleiro[1][3]); // mesma linha [1] ultima coluna [3]
console.log("============================================================");
console.log("============================================================");

//para imprimirmos cada um dos valores do nosso array

/**
 * 1º montamos o for 
 * 2º sabemos que o array (inicia ou tem o index ou o indice em = 0)
 * 3º apartir disto definimos o i = 0;
 * 4º precisamos do tamanho do array (nomedoArray.length) desta forma temos o tamnho dele
 * 5º adicionamos i++; que é a iteração, para o loop acrescentar de um a um e percorrer o array.
 * 
 * 
 */
//Enquanto 0 < 10 eu quero que acrescente 1
//Desta forma toda vez que ele acrescentar 1 ou seja fazer o loop
//Ele vai execultar a ação que esta dentro do for
//Neste caso a ação é: imprimir no console a posição do array => console.log(idade[i]);
for (var i = 0; i < valores.length; i++){
     console.log("loop da posição [i], mas a impressão é do valor do array: "  +  valores[i]);
  
     //Tentar mostrar a posição e o valor
     //console.log(valores.indexOf(valores[i], [i]));
     
}





