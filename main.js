let buttons = document.getElementsByTagName('button');
let button = buttons[0]
let nombres = document.getElementsByTagName('input')
let nombre = nombres[0]

   button.onclick = function alerta(){
    alert('hola ' + nombre.value + '!')

}