let i = 1;
console.log("Numeros pares del 1-30")
while (i <=30) {
  if (i%2===0){
    console.log(i);
  }
  i++;
}

console.log("Numeros impares del 1-30")

for (let i = 1; i <=30; i++) {
  if (i%2===1){
    console.log(i);
  }
}

let tabla=7;
console.log("Tabla del 7" );
for (let i = 0; i <=10; i++) {
    console.log("7x" +i + " = " + (tabla*i))
  
}


let i2 = 10;
while (i2 >=0) {
    
  console.log(i2);
  i2--;
}


function sumar (a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir (a,b){
    return a/b;
}

function calculadora(operador,a,b){
    
    switch(operador){
        case "+":
            console.log("El resultado de la division en funcion es : " +sumar(a,b));
            break;
        case "-":
            console.log("El resultado de la division en funcion es : " +restar(a,b));
            break;
        case "*":
            console.log("El resultado de la division en funcion es : " +multiplicar(a,b));
            break;
        case "/":
            console.log("El resultado de la division en funcion es : " + dividir(a,b));
            break;

    }
}


calculadora("*",10,5);



console.log("Tabla de multiplicar del 8 en funcion: ")



function tablaMultiplicar(a){
    for (let i = 0; i <= 10; i++) {
      console.log(a +"x" + i + "=" +(a*i));
    }
}

tablaMultiplicar(8);




document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("mensaje").style.display = "none";
    document.getElementById("titulo").innerText = "PracticaSemana6";
    //document.getElementById("actividades").innerHTML = "<h2>Actividades</h2>";
    //let nuevoLi = document.createElement("li");
    //nuevoLi.innerText = "Conferencias";
    //document.getElementById("listaActividades").appendChild(nuevoLi);

    document.getElementById("actividades").style.backgroundColor = "orange";
    document.getElementById("listaActividades").style.backgroundColor = "orange";
    document.getElementById("actividad").style.backgroundColor = "white";
    document.getElementById("actividad").style.borderColor = "violet";

    document.getElementById("agregarActividades").addEventListener("click", function () {
        let actividad = document.getElementById("actividad").value;
        if (actividad != "") {
            let nuevoLi = document.createElement("li");
            nuevoLi.innerText = actividad;
            document.getElementById("listaActividades").appendChild(nuevoLi);
            document.getElementById("actividad").value = "";
            document.getElementById("actividad").style.backgroundColor = "white";
            document.getElementById("mensaje").style.display = "none";
        } else {
            document.getElementById("actividad").style.backgroundColor = "red";
            document.getElementById("mensaje").style.display = "block";
        }
        console.log(actividad);
    })
})

