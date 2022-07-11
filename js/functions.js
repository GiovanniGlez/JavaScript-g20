// !Funciones
//-> Son elementos esenciales del desarrollo y nos ayudan, nos permiten encapsular lineas de codigo (statements)
//en un identificador al cual podemos hacerle referencia para reutilizar las mismas 
//* Ojo -> funciones anonimas

// !Para utilizar funciones : ...
// !1. Declara la función ->
    //! 1.1 Utilizando la palabra "function"
    //! 1.2 Identificador de la función -> A elegir
    //! 1.3 EL parametro o la lista de parametros, abrazados entre parentesis -> (param1 , param2 ......)
    //! 1.4 Bloque de codigo -> {.. Codigo a ejecutar}
    //!1.5 Opocional -> ? Retorno


    // -Ejemplo de función
    // function funcionSuma()  {
    //     console.log('Esto es una función');
    // }

    //! 2. Invocar o llamar la función
    //* Declarar una función no la ejecuta
    //! 2.1 Invocarla o llamar de forma tacita
    //! 2.2 -> funcionSuma()
    //! 2.3 Al invocar la función estamos ejecutando la línea de código definidas en la declaración
    //! 2.4 En caso de tener parametros definidos es necesario pasarle dichos parametros

    // funcionSuma()

// ! 3. Retorno
//  3.1 Las funciones retornan por defecto "undifined"
// 3.2 Utilizamos la palabra return
//  ! Utilizamos la palabra reservada "return"
// function imprimeMensaje()  {
    //    console.log('Esto es una función');
//     return "hola"
//     }
// let saludo = imprimeMensaje();
// if ( saludo === 'hola');

//     function imprimeMensaje() {
//  console.log("Esto es uan función")  
    // }
//  3.3 el codigo que sigue al return no se ejecuta!


// ! parametros
// ! Parametro -> son variables que toma la función al momento de su definición

// function imprimeMensaje(p1, p2) {
//     console.log(p1, p2);
//     let result;
//     return 2 + 3; 
// } 

//! argumento -> son las variables que toma la función al momento de ser invocada -> Son conocidos o relativamente conocidos

// imprimeMensaje("hola!!!!!!!!", "mundo");

// 'hola'.substring()
// let test;
// console.log(test);

// function suma(a, b = 20) {
 //   console.log(a, b);
//     return a + b;
// }

// console.log(suma(10, 10));

//! Valores por defecto
//prompt()

//! Mutabilidad de argumentos
// let a = 10;

// function suma(num1, num2 = 10) {
//   let a = num1 + num2;
//   console.log("a en la función", a);
//   return a;
// }


//console.log(suma(a));

//console.log("a global")
//Practica
// Declarar una función que tome uno o más argumentos y haga un retorno, Pueden llevar a cabo alguno de los ejercicios de la prácticas de la sesión 1 o 2 o 3
// Almacenar el retorno en una variable y imprimir un mensaje usando esa variable -> template literals