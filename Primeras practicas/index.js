

/* 
Creación de elementos en el dom

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

const prueba = [
    {letra : "a", numero : 1},
    {letra : "b", numero : 2}
]
const title = document.createElement('h1')
title.innerText = 'Hola mundo'
document.body.append(title)

const parrafo = document.createElement('p')
prueba.forEach(element => {
    console.log(element)
    parrafo.innerText = element.letra
    document.body.append(parrafo)
})
for (let i = 0; i < prueba.length; i++) {
    const element = prueba.letra[i];
    parrafo.innerText = element;
    document.body.append(parrafo)

    
}


