let arr = [18, 2, 45, 6, 23, 89, 1, 10, 22, 66, 78]

/*
    encontrar el valor maximo de un arreglo y tiene un valor
    de 5e-324
*/

let resul = Number.MIN_VALUE


//     Number.MIN_VALUE => es un valor minimo que tiene javascript que es cernano al cero
//     positivo
// 


for(let index = 0; index < arr.length; index++){
    const item = arr[index]

    resul = Math.max(resul, item)
}
console.log(resul)





 let resul2 = arr.reduce((pre, item, index)=>{
        return Math.max(pre, item) 
 }, Number.MIN_VALUE)



console.log("\nmetodo reduce()")
 console.log(resul2)


// voy a repsar despues lo de reduce 
