/*Ejercicio 1
* Función que reciba una palabra
* Retorna la palabra invertida
* La reversa del string lo haremos usando métodos de array
*  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
*
* reverseStr('hola mundo')
* -> 'odnum aloh'*/


function reverseText (text) {
    //return text.split('').reverse().join('')
    return console.log(text.split('').reverse().join(''));
}
let text = prompt('Escribe la palabra');

let result = reverseText(text);

/*Ejercicio 2
* Dado el siguiente arreglo de ciudades
*   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
* Generar una función que capitalize cada elemento del array
* => Se puede resolver con .forEach() o .map()*/


// let capCities = (cities) => {
//     newCapCities = cities.map(city =>{
//         return city.toUpperCase()
//     })
//     return newCapCities
// }
// const cities = ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']

// console.log(capCities(cities))

/*Ejercicio 3
* Dado un arreglo con nombres de personas,
* Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
*
* onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
* -> ['Ana','Ivan','Oscar']
*
* => Se puede resolver con .forEach() o .filter()
*/