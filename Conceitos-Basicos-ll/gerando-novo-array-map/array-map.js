
/**
 * O map vai mapear o array 
 * Aplicar a transformação
 * E devolver outro array com o mesmo tamanho.
 * 
 */
console.log("======================================================================================");
console.log("======================================================================================");
console.log("==========Definição do (map) ele gera um novo array com valores modificados===========");
console.log("=========Detalhe !! gera novo array com o mesmo tamanho do array original=============");
console.log("======================================================================================");
console.log("====Usando o MAP=====");
console.log("=O map serve para mapear cada um dos dados do array e aplicar a tranformação====");
console.log("===Quando estamos falando em transformar o dado seria pegar cada um deles e aplicar o que se precisa");
console.log("======================================================================================");
console.log("Esta é a fonte de dados(array) original");
var valoresMap = [2, 4, 6, 8, 10];
console.log(valoresMap);

console.log("======================================================================================");

console.log("Vemos a transformação em cada uma posição no elemento foi aplicada");
console.log("=====esta equação => return valor * 2;======");
console.log("Observe que temos cada valor (mapeado) (transformado) foi multiplicado por dois");
console.log("======================================================================================");


var dobro = valoresMap.map(function(valor){
  return valor * 2;
});
console.log(dobro);

console.log("===================================================");
console.log("===================================================");

console.log("===== [Vamos fazer a mesma transformação com map] ====");
console.log("============[Mas de forma diferente]===============");
console.log("===================================================");

console.log("Mostrando valor original");
console.log(valoresMap);

/**
 * Este parametro esta recebendo o valor do array
 * Mapeado 2, depois 4, depois 6 e vai transformando e multiplicando
 * @param {
 * } valor 
 * @returns 
 */

 function dobrar(valor){
  //console.log("o (valor) do parametro: " + valor);
     return valor * 2;
 }

//Esta forma tambem está corretissima de usar a função
//Mas tem mais linhas
// function dobrar10(valor){
//   var valor10 = valor * 2;
//   return valor10;
// }

var dobro = valoresMap.map(dobrar);

console.log(dobro);

console.log("======================================================================================");
console.log("======================================================================================");
console.log("======= [ENCADEANDO MAP] =======");
console.log("======== [FAZEMOS O ENCADEAMENTO PARA REALIZAR MULTIPLAS TRANSFORMAÇÕES] =============");

/**
 * Encadeamento maps para realizar multiplas transformações
 */

//veja que fiz esta função com (boas praticas) menas linhas
function soma_4(valorDoMap){
     return valorDoMap + 4;
}

// Veja que é a mesma função acima. Mas fiz com mais linhas
function dividir_por_5(valorDoMap){
   var recebendoValor = valorDoMap / 5;
   //como tem parametro temos que dar o return
   return recebendoValor;
}
console.log(valoresMap);

console.log("valor dobrado");
console.log(valoresMap.map(dobrar));
console.log("vamos para soma");
console.log(valoresMap.map(dobrar).map(soma_4));

var resultadoDoEncadeamentoMap = valoresMap.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultadoDoEncadeamentoMap);
console.log("======================================================================================");

/**
 * Resultado do mapeamento
 * 
 * Passo 1 => dobrar = [4, 8, 12, 16, 20];
 * Passo 2 => soma_4 = [8, 12, 16, 20, 24];
 * Passo 3 => dividir_por_5 = [1.6, 2.4, 3.2, 4, 4.8];
 * 
 */


