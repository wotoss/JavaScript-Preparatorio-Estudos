
//destructing com array
const numeros = [1, 3, 5, 7];

/**
 * aqui estou extraindo o array numeros, para dentro das variaveis num1, num2, num3, num4
 * eu preciso colocar dentro do array [] porque esta vindo de um array.
 * 
 */

const [num1, num2, num3, num4] = numeros;

console.log("===[DESTRUCTING EXTRAI DADOS DOS CONTAINER E PÕE EM VARIAVEIS, CONST, LET]===");
console.log("==============================");
console.log("===[fazendo a descontrução]===");
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log("==============================");

//Vamos neste momento (descartar ou selecionar) elementos no array
//veja ! que o espaço do (n2) eu deixo vazio;
//ou seja: desta fonte de dados = >const numeros = [1, 3, 5, 7];
//a posição do [1] valor [3] eu não pego. Eu descarto
const [n1, , n3, n4] = numeros;
console.log("eu descarto não seleciono a posição [1] seria o valor [3]");
console.log(n1);
console.log(n3);
console.log(n4);

console.log("=======================================================================");
//Podemos colocar valor default que será usado caso não hajá no container
console.log("podemos colocar valor default que será usado caso não hajá no container");
console.log("sim podemos colocar um valor padrão, lembrando que sempre prevalece");
console.log("a posição do array, caso não tenha a posição preenchomos a variavel");
console.log("mas o array prevalece do mesmo jeito. Não adiciona");
console.log("=======================================================================");

const [nu1, nu2, nu3, nu4 = 34, nu5 = 99] = numeros;
console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);
console.log("veja que não alterou o array");
console.log(numeros);
console.log("=======================================================================");

//Destruturing com objetos
console.log("utilizando Destruturing no objeto");
//console.log("tranzendo o ");
const produtos = {
  nome: "Playstation 4",
  preco: 1678.44
}
const {nome, preco} = produtos;

console.log(nome);
console.log(preco);

//usando template-strings
console.log("===[usando template-string]===");
console.log(`${nome} custa ${preco}`);
console.log("=======================================================================");
console.log("=======================================================================");
console.log("Já em outro objeto caso eu queira pega somente um elemento (informação)");
console.log("===[ caso eu queira pegar somente o nome]===");
console.log("=======================================================================");
const feira = {
  informacao: "dia quarta-feira",
  preco: 1678.44
}
const {informacao} = feira;
console.log(informacao);
console.log("=======================================================================");