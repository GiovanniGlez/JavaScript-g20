//! Funciones flecha (Arrow functions)

//? No necesitamos la palabra reservada function
//? No en todos los casos es necesario la palabra return para regresar datos

const arrowFunction = (param1, param2) => {
    console.log(param1, param2);
    return;
}

//! Declaracion
// const arrowFunction = () => {
//   console.log(p1);
// };

//! Demo
// const stringReverse = (str = "hola") => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// };

// console.log(stringReverse());

//! Demo reduccion de codigo con el uso de arrow function
// ? Version 1
// const functionLarge = (a) => {
// Code
//   return a + 1;
// };

// ? Version 2
// const functionMedium = () => {
//   a + 1;
// };

// ? Version 3
// const functionSmall = () => a + 1;

// !Practica Grupal -> Identificar palidromo
// const isPalindrome = (str) => {
//   // ?Limpiamos los espacios
//   let strWithOutSpaces = str.trim().replaceAll(/\s/g, "").toLowerCase();

//   // ? Creamos una variable donde almacenar la cadena invertida
//   let strReversed = "";

//   // ? Invertidos la cadena y almacenamos en nuestro espacio reservado
//   for (i = strWithOutSpaces.length - 1; i >= 0; i--) {
//     strReversed += strWithOutSpaces[i];
//   }

//   // ? Comparamos ambos y hacemos el return
//   if (strWithOutSpaces === strReversed) {
//     return "El string ingresado si es un palindromo";
//   } else {
//     return "El string ingresado no es un palindromo";
//   }
// };

// // ? Log del resultado
// console.log(isPalindrome("osof"));