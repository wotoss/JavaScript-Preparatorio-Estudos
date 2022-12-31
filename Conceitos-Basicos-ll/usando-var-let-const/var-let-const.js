
/**
 * este não é estrutura de repetição
 * 
 */
console.log("==========================================");
console.log("==========================================");
console.log("==[utilizando o var: ]==");

var numero = 42;
console.log(numero);
console.log("==========================================");
console.log("==[fazendo a soma com var: ]==");

numero = numero + 18;
console.log(numero);

console.log("==========================================");
console.log("==========================================");


//utilizando let
console.log("==========================================");
console.log("utilizando let: ");
let outro_numero = 42;
console.log(outro_numero);

outro_numero = outro_numero + 18;
console.log(outro_numero);
console.log("==========================================");

for(var i = 0; i < 5; i++){
    var valor = i * 3;
    console.log(valor);
}
console.log(valor);
console.log(i);
console.log("===================================================================");
console.log("valor da multiplicação (var valor = i * 3;) dentro do for: " + valor);
console.log("vou passar a iteração de (i): " + i);
console.log("===================================================================");


/**
 * 
 * sempre quando for declarar varivel vamos usar let 
 * 1º (let) é a forma mais moderna de si declarar variavel em (js) 
 * 2º você vai evitar erros no seu programa.
 * 3º (let) é uma variavel que mantem um (escopo local), quando a (var) tem escopo (global).
 * 4º Curiosidade nós definimos o escopo em (js) através das (chaves {})
 * 5º (let) dentro de uma função ou um for ou melhor entre as (chaves {}) ele só funciona ali dentro.
 * 6º se tentarmos usar forá ele dará (ReferenceError) "esta dizendo que a variavel não existe do lado externo".
 * 7º ponto positivo é que esta variavel como só é conhecida dentro do (escopo ou chaves {}) não causará impacto em outras partes do programa.
 * 
 * 8º o var permite que você redeclare variavel "o que passa a se um erro em seu sistema"
 * "isto é muito perigoso ao sistema"
 * var numero = 80;
 * console.log(numero);
 * 
 * var numero = 32;
 * console.log(numero);
 * 
 * ====================
 * 9º já o (let) nos avisa no sistema js e dar (erro de sintaxe) ou SyntaxError
 * "isto se torna segurança que você adiciona no seu programa".
 * "recomendação ! sempre utilize let em seu sistema".
 * ====================
 * let numero = 80;
 * console.log(numero);
 * 
 * let numero = 32;
 * console.log(numero);
 * 
 */


console.log("=================================================================================");
console.log("=================================================================================");
console.log("==[ Trabalhando com constante const]==");
console.log("==[ Significa que em todo o meu sistema ele terá aquele valor que foi definido]==");
console.log("==[ E quando eu tentar mudar o valor da const, dará erro]==");
console.log("=================================================================================");

const taxa = 1.44;
console.log("valor da constante que terá em todo o sistema!");
console.log(taxa);

let res = 45 * taxa;
console.log(res); 

/**
 * Caso eu tente mudar o valor da const, dará erro sendo (TypeError) 
 * taxa = 5;
 * console.log(taxa);
 * 
 */

/**
 * Constante vs Mutação.
 * 
 */
console.log("=====================================================================================");
console.log("===[ Constante vs Mutação]===");
console.log("===[veja que estamos alterando o vamos da (chave ou propriedade do objeto = nome)]===");
console.log("===[e não o valor o valor da const curso]===");
console.log("===[o que estamos acessando curso.nome no caso (nome) podemos fazer a mutação]");
console.log("=====================================================================================");

console.log("===[mutação ou alteração feita do acesso (nome) ou seja (curso.nome)]===");
const curso = {nome: "Programação em JavaScript"};
console.log(curso.nome);

//Não posso alterar o valor de uma constante const
//exemplo:
//curso = 43; //

//Podemos sim ! realizar a mutação em dados contidos na constante.
curso.nome = "Programação em Python"; //mutação
console.log(curso);


/**
 * Dicas importantes!
 * 
 * a variável poderá ser alterada? (vai variar?) se sim, use (let).
 * a variável será constante no sistema? (não vai variar?) se sim, use (const).
 * 
 * 
 */


console.log("=================================================================================");
console.log("=================================================================================");