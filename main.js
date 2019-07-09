let buttons = document.getElementsByTagName('button');
let button = buttons[0]
let nombres = document.getElementsByTagName('input')
let nombre = nombres[0]
let acheDos = document.getElementById('innerText')


   button.onclick = function(){
    acheDos.innerHTML = 'hola ' + nombre.value + '!'
}
