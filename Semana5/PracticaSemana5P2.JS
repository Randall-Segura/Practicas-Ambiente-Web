let nombre="Randall";
let apellido="Segura";
let nombreCompleto= nombre + " " + apellido;
console.log("Nombre completo: " + nombreCompleto);

let edad=0;
edad=parseInt(prompt("Ingrese su edad"));

if(edad>=18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");

}


let frutas=["Banano", "Papaya","Mango"];
console.log("Frutas antes de cambios: " + frutas);
frutas.push("Manzana");
frutas.unshift("Pera");
console.log("Frutas despues de los cambios: " + frutas);

let existePera=frutas.includes("Pera");

if(existePera){
    console.log("La pera si esta en el arreglo");
}else{
    console.log("La pera no existe en el arreglo");
}


for (let i = 0; i <frutas.length; i++) {
  console.log((i+1) + " : " + frutas[i]);
}

