// Exercício 2 
// Similarmente ao exercício anterior, crie uma função que verifica se dois objetos são 
// idênticos. 

const object1 = {
  nome: "Mateus",
  idade: 21
}

const object2 = {
  nome: "Mateus",
  idade: 21,
}

function comparaObjetos(obj1, obj2) {
  let saoIguais = false;

  let tamanhoObj1 = Object.keys(obj1).length
  let tamanhoObj2 = Object.keys(obj2).length

  if(tamanhoObj1 === tamanhoObj2)
  {
    saoIguais = true;

    const chavesObj1 = Object.keys(obj1)
    const chavesObj2 = Object.keys(obj2)

    for (let chave of chavesObj1) {
      if(obj1[chave] !== obj2[chave])
      {
        saoIguais = false;
        break;
      }
    }
  }

  return saoIguais;
}

console.log(`Resposta exercício 2: ${comparaObjetos(object1, object2)}`)