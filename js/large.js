let number1 = prompt('Proporciona un número');
let number2 = prompt('Proporciona otro número');
let number3 = prompt('Proporciona otro número');

if ( number1 > number2 && number1 > number3) {
    console.log('Número 1 es mayor')}
    else if ( number2 > number1 && number2 > number3) {
    console.log('Número 2 es mayor')
}
    else if ( number3 > number1 && number3 > number1) {
    console.log('Número 3 es mayor')
}
else{
    console.log('Tienen que ser núemros diferentes')
}