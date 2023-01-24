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

const background = 'blue'
const color = 'white'
const button = document.createElement("button");
button.innerText = "Click me";
//String literals

button.style = `background: ${background}; color:  ${color}; width = 50px`
document.body.append(button);