//(indice ou index)

/*
array contendo 5 elementos ou posição
n = 5 
ultimo elemento é 
n - 1 ou seja 5 -1 = 4 elementos
[0] [1] [2] [3] [4] 4 elementos ou posição
colocar os valores no array
[0]  [1]  [2]  [3]  [4] => posição ou elementos
[12] [24] [36] [48] [52] => valores 


//Detalhes sobre os arrays 
* Possuem tamanho infinito 
"lembrando que este infinito passa pela sua memoria, toda vez que você aloca um valor
 ou posição ele consome memoria do seu computador ou servidor. Sua memoria pode travar por falta de espaço."
 nas linguagens C e java você já declara o array com tamanho definido. 
 exemplo declaração de array em C# int[] array = new int[10]; você passa o tamanho dele
* Podemos colocar qualquer tipo de dados
Outra questão é que em JavaScript nos podemos misturar os dados no array
podemos colocar [inteiro ou int, string, booleano] e assim sucessivamente
[12] ['woto'] [true] [48] [12]
porem o recomendado é não misturar os tipos de dados.
*/

//Formas de se criar os arrays
//fazendo array criando a instancia new Array
var alunos = new Array('Evania', 'Elza', 'Elizabeth', 'Elena', 'Elizangela');
console.log(alunos[0]);

//forma recomendada
var notas = [1, 3, 5, 7, 9]
console.log(notas);

//Criando um array vazio
console.log("=====imprimindo array vazio=====")
var dados = [];
console.log(dados);

console.log("=====imprimindo indice ou posição [2] de notas=====")
//Fazendo acesso ao valor de um indice
console.log(notas[2]);

console.log("======alterando valor do array====");
//alterando o valor do (indice, index ou elemento)
notas[2] = 12;
console.log(notas);

//atenção ao acessar um valor com um indice que não existe
notas[9] = 10;
console.log(notas);
//[ 1, 3, 12, 7, 9, <4 empty items>, 10 ]
//Ele trás este resultado informa que há posições vazias.
//O javascript coloca justamente na posição que você adicionou. 
//Mas o espaço onde não tinha posição vai ficar vazio. E é isto que ele mostra as posições vazias.

//quando tentamos acessar este espaço que esta vazio no array ele tras um resultado como indefinido
console.log(notas[5]);
//[ 1, 3, 12, 7, 9, <4 empty items>, 10 ]
//undefined
//isto significa que a posição [5] [6] [7] [8]
//são indefinidas.

//fazendo uma estrutura de controle antes (if) 
// para que o resultado de (undefined seja 54)
if(notas[5] == undefined){
   notas[5] = 54;
}

//podemos execultar que o resultado é justamente este, nas posições indefinidas
// console.log(notas[5]); //undefined
// console.log(notas[6]); //undefined
// console.log(notas[7]); //undefined
// console.log(notas[8]); //undefined
// console.log(notas[9]); // 10

//fazendo teste, para ver se a posição é undefined
console.log(notas[5] == undefined); //return é true 

//quando busco o array agora depois de ter feito o (if)
//a posição 5 no array vem 54
console.log(notas);
//[ 1, 3, 12, 7, 9, 54, <3 empty items>, 10 ]
//e vazio antes tinha 4 posições agora tem 3 posições.


//Conjunto 2 Dentro da mesma aula.
//Inserir elementos no final do array...



//parei array.js tempo 25m:19s dia 20/12/12
//(ctrl ;)

