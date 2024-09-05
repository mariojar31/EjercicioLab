let hello1 = document.getElementById('hola1');
let hello2= document.getElementById('hola2');

function changeColor()

hello1.innerHTML="Adios"
hello2.style.color='orange'

let newHeader= document.createElement('div');
newHeader.innerHTML="<Button onClick='changeColor()>Cambiar Color</button>'"

