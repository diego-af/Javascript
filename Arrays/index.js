// Primeiro metodo em array é o filter

//Que cria um novo array como todos os elementos que passaram teste


//funcao usada para teste do array para maior
function isBig(valores,i){
    return valores>10+i
}

// criando meu array

var filtered = [3,4,5,8,10,11,18,20,26,28]

//imprimindo meu array
console.log(filtered)

//funcao usada para teste do array para maior
function isLess(valores){
   
    return valores<=10
}

//filtrando e pessando a função de teste do array
var filtering = filtered.filter(isLess)
console.log(filtering)