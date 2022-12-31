

console.log("============================================================================");
console.log("===[hosting a declaração da variavel é feita automaticamente]===");
console.log("se tiver declarada com var ele faz e da undefined ");
console.log("o que não é uma boa pratica acessar a variavel (undefined)");
console.log("===[já com (let e const da erro) o que é correto não conseguimos acessar]===");
console.log("============================================================================");
console.log(nome); //undefined 
/**
 * neste (undefined) ocorre o (hoisting) que o significado seria (içamento).
 * 
 */

var nome = "vania"; //declarando e inicializando a variável

console.log(nome);

/**
 * undefined
   vania
 * 
 */
   console.log("=============================================================");
   console.log("===[ fazendo o içamento ou hosting (por debaixo dos panos)]==");
   //Veja o que o (java script) faz isto por (debaixo dos panos)
   //seria como se ele içasse a declaração da variavel para cima
   //ele iça a declaração da variavel e deixa somente a inicialização dela

   //Ele vai ter a mesma execução...(Mas esta é por dentro do js)

   var nome;
   console.log(nome);

   nome = 'vania';

   console.log(nome);

   /**
    * se mudar-mos a variavel para ler ou const 
    * dara erro pois (esta certo) não é bom acessar-mos uma variavel indefinida.
    * 
    * já com o var mostra que é undefined, mas deixa acessar....
    * 
    */


   console.log("==============================================");
   console.log("==[neste icamento teremos outro tipo de erro:]");
   console.log("===[NAN - Not a Number]===");
   console.log("==============================================");

   console.log(idade + 4); //NAN - Not a Number

   var idade = 23;

   console.log(idade);
   console.log("============================================================================");
   console.log("============================================================================");