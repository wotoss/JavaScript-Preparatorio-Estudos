
/**
 * vou criar como const, porque não vou precisar alterar.
 * 
 * 
 */

const idade = 19;
const nome = 'woto';
console.log("===================================================");
console.log("===[ montando (maneira antiga) ]===");


console.log( nome + ' tem ' + idade + ' anos. ' );

console.log("=========================================================================");
console.log("===[maneira moderna template-strings]===");
console.log("===[no template-string não usamos ('' aspas simples) e sim (`` crase)]===");
console.log("=========================================================================");

console.log(`${nome} tem ${idade} anos.`);
console.log("=========================================================================");
console.log("=========================================================================");
console.log("===[dentro do template string eu posso passar uma função fazer um calculo]===");
console.log("===[neste caso vou somar + 3 dentro do template-string]===");
console.log("=========================================================================");

//criar a função soma
//idade é 19 da const, esta indo como parametro
function soma_3(idade){
   return idade + 3;
}

/**
 * 
 * Em template strings usa-se a cráse, e não aspas simples ou acento agudo.
 * crase `` (sim)
 * aspas-simples '' (não)
 * 
 */

console.log(`${nome} tem ${soma_3(idade)} anos `);

/**
 * 
 * ===================================================
===[ montando (maneira antiga) ]===
woto tem 19 anos. 
=========================================================================
===[maneira moderna template-strings]===
===[no template-string não usamos ('' aspas simples) e sim (`` crase)]===
=========================================================================
woto tem 19 anos.
=========================================================================
=========================================================================
===[dentro do template string eu posso passar uma função fazer um calculo]===
===[neste caso vou somar + 3 dentro do template-string]===
=========================================================================
woto tem 22 anos 
 * 
 */