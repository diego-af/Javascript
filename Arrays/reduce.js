// Reduce -> executa uma funcao para cada elemento 
//array criado
const array =[10,20,30,40,50]


// função que será passada
const reduce = (nextValue, currentValue) => nextValue+ currentValue;

//função que testa se o valor é maior que o desejado
function testing(valor){
    return valor>140
}

// variavel onde o valor é armazenado
const newArray = array.reduce(reduce)





const myCalback = (acc, cur)=> Math.max(acc.x,cur.x)
const myClabackMin = (acc,cur)=> Math.min(acc.x, cur.x)
const myClaback2 = (acc,cur)=> Math.min(acc, cur)


const newReduce = [{x:2}, {x:32}].reduce(myCalback)
const newReduces = [{x:2}, {x:32}].reduce(myClabackMin)

console.log(newReduce)
console.log(newReduces)


const myMap= [{x:2}, {x:32}].map(ele=> ele.x).reduce(myClaback2)
console.log(myMap)
