import x from './add.js';
/* 
Creación de elementos en el dom
const title = document.createElement('h1')
title.innerText = 'Hola mundo'

const button = document.createElement('button');
button.innerText = 'click'

button.addEventListener('click', function() {
    title.innerText = 'Texto actualizado'
    alert('Se realizó un click')
})
document.body.append(title); añade el elemento creado con js
document.body.append(button);

//       //
Para insertar html
document.body.innerHTML();
 */

//String literals

const background = 'blue'
const color = 'white'
const button = document.createElement("button");
button.innerText = "Click me";
bool= true;
/*if(bool)
    background : "blue"
else
    background : background
    

*/
button.style = `background: ${bool ? 'blue' : background}; color:  ${color}; width = 50px`
document.body.append(button);

/*Forma basica para manejar arrays
const numbers = [1,2,3,4];
numbers.forEach(function(number){
    console.log(number);
})

Metodo map para recorrer el array, mantener el primero y tener la posibilidad de modificarlo.
const numbers = [1,2,3,4]
const newNumbers = numbers.map(function (number){
    return `Hola ${number}`
})
console.log(numbers)
console.log(newNumbers)
--Metodos para recorrer pueden ser .find, .filter
.concat para combinar arrays
(...array1, ...array2) para concatenar arreglos u objetos



*/

var result = add(10,20)
console.log(add(10,20))
console.log(multiply(10,20))
console.log(x)