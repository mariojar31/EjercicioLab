let hello1 = document.getElementById('hola1');
let hello2= document.getElementById('hola2');
let div=document.getElementById('button')
let color = false;

let newHeader= document.createElement('h1');
div.appendChild(newHeader);
newHeader.textContent='Presiona para cambiar Color del texto';
newHeader.onclick=changeColor

hello1.innerHTML="Adios"
hello2.style.color='orange'


function changeColor(){
    if(color==false){
        newHeader.style.color="red"
        color=true
    }else{
        newHeader.style.color="black"
        color=false
    }
}




