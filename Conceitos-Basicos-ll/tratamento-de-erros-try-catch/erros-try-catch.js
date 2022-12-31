

/**
 * Tratamento de erros com try catch
 * try = tenta execultar este contexto ou escopo
 * 
 * catch(e) = captura o erro.
 * 
 * 
 */
try{
  console.log(nome);
}catch(e){
  console.log("Não foi possivel imprimir nome.");
  console.log(e.name);
  console.log(e.message);
}
console.log("Oi...!");

console.log("================================================");
console.log("===[tratamento de erro com try catch]===");
console.log("================================================");

function dividir(num1, num2){
  if(num1 === 0 || num2 === 0){
    throw("Os valores devem ser positivos."); //lançando uma exceção (erro).
  }else{
    return num1 / num2;
  }
}

try{
  let ret = dividir(8, 2);
  //let ret = dividir(8, 0);
  console.log(ret);
}catch(e){
   console.log('Não foi possível dividir.');
}finally{
  //finally é sempre execultado
  //independente se houve erro ou não...
  //se eu quero que algo seja execultdo mesmo que de erro ou não
  //utilizo sempre o finally.
  console.log('Vamos continuar....');
}

console.log("================================================");
