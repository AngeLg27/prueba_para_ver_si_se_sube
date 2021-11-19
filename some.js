const arr =[
    {id: 0, name: 'Las tortas de doña Martha', raiting: 3.5},
    {id: 1, name: 'Linguinis', raiting: 3.5},
    {id: 2, name: 'el sushi de perro'}
]

let test = false
for(let index = 0; index < arr.length; index++){
    const item = arr[index]
    if(item.raiting == undefined){
        test = true
        break
    }

    /*
        en este ciclo estamos preguntando si existen tiendas
        que no tiene raiting al menos que sea una
    */
}

/*
    some es similar a every, pero aqui basta con que un solo elemento
    cumpla la condicion
*/
console.log(test)

console.log('\nmetodo some')

const test2 = arr.some( item => {
    return item.raiting == undefined
})

console.log(test2)


const test3 = arr.includes()
/*
    el metodo includes, no permite crear una callback,

    el metodo includes, me permite preguntar si existe un el

*/