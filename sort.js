
const arr = [2, 10, 4, 22, 56, 1000, 3, 45, 6]

for(let index = 0; index < arr.length; index++){
    
    for(let j = index + 1; j < arr.length; j++){
        if(arr[index] > arr[j]){
            let temp = arr[index]
            arr[index] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)
/*
    el metodo sort me permite ordenar los elmentos de un arreglo

*/
