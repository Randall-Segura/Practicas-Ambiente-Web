let canton="Aserri";
let colorFavorito= "Azul";
let gustaLeer=true;

console.log(canton);
console.log(colorFavorito);
console.log(gustaLeer);

let nombre="Randall";
let apellido="Segura";

let nombreCompleto=(nombre + " " + apellido).toUpperCase();
console.log(nombreCompleto);

let frutas=["Manzana", "Pera", "Sandia"];
console.log(frutas);
frutas.push("Papaya");
console.log(frutas);

let texto="hola mundo!";
let tieneMundo=texto.includes("mundo");
console.log(tieneMundo);

let mensaje="Me gusta Java";
console.log(mensaje);
let nuevoMensaje=mensaje.replace("Java", "JavaScript");
console.log(nuevoMensaje);



let edad=20;

if (edad<18){
    console.log("No es mayor de edad");
}else{
    console.log("Si es mayor de edad")
}


let nota=80

switch(true){
    case (nota>90):
        console.log("A");
        break;
    case (nota>=70 && nota<90):
        console.log("B");
        break;
    case (nota<70):
        console.log("C");
        break;
    default:
        console.log("Nota no valida");
        break;
}


let operador="*";
let num1=10;
let num2=5

switch(operador){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
        
}



    














