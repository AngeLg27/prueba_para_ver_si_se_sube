let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18]

let resul = 0
// es importante para ejercicios donde se sumen varios numeros
// declarar una varibale del resultado, antes declarada con un valor
// de 0
for(let index = 0; index < arr.length; index++){
    const item = arr[index]


    resul = resul + item
}
console.log(resul)

/*
    el metodo reduce => reduce un arreglo, aplicar una serie de operaciones qeu de forma iteraritva
    se van a ir acumulando y nos va a devolver un uni resultado
 */


 let resul2 = arr.reduce((pre, item, index)=>{
     return pre + item // result = result +item
 }, 0)

 /* 
    el metodo reduce recibe como parametro un callback, 
    que tiene parametros (pre, item, index) , ademas fuera de 
    la funcion puedeo indicar con que valor inicia 
    el parametro prev, que para este caso que es una suma de los elementos
    de un arreglo debe iniciar en 0

*/

console.log("\nmetodo reduce()")
 console.log(resul2)



