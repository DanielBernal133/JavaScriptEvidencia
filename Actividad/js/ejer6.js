console.log("Bienevenido");

const BtonIn = document.getElementById('botonIn');
const Rta = document.getElementById('rta');
const verIn = document.getElementById('botonVer');
const botonBus = document.getElementById('botonBuscar');


let nombres = [];
let edades = [];

BtonIn.addEventListener('click', ()=>  {

    let nombre = document.getElementById('nomIn').value;
    let edad = document.getElementById('edadIn').value;
    nombres.push(nombre);
    edades.push(edad);
});

botonBus.addEventListener('click', ()=>{

    let nombrebus = document.getElementById('nombreBuscar').value;
    let posicion; 
    let existe = false;


    for (let i=0; i< nombres.length; i++) {

        if (nombres[i]== nombrebus) {
           posicion=i; 
           existe = true; 

        }
        
    }

    if (existe) {
         
        rta.innerText = 'El usuario ' +nombres[posicion] + ' si existe y tiene la edad de:' +edades[posicion];

    }else {

        console.log("El usuario no existe");
    }
});
    verIn.addEventListener('click', ()=> {

        rta.innerText = 'Vectore nombre';
        for (let i=0; i< nombres.length; i++) {
    
            rta.innerText ='['+nombres[i]+']';
    
        }
 
        rta.innerText = 'Vectore edades'
        for (let i=0; i< edades.length; i++) {
    
            rta.innerText='['+edades[i]+']';
    
        }
    });

    

