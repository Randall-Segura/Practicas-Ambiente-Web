let num1 = 20;
let num2 = 10;

console.log("La suma de " + num1 + " + " + num2 + " es " + (num1 + num2));
console.log("La resta de " + num1 + " - " + num2 + " es " + (num1 - num2));
console.log(
  "La multiplicacion de " + num1 + " * " + num2 + " es " + num1 * num2
);
console.log("La division de " + num1 + " / " + num2 + " es " + num1 / num2);

let baseTriangulo = 10;
let alturaTriangulo = 5;
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
  "El area de un triangulo con base " +
    baseTriangulo +
    " y altura " +
    alturaTriangulo +
    " es " +
    areaTriangulo
);

let numero = parseInt(prompt("Ingrese un numero para saber si es par o impar"));

if (numero % 2 === 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}

let diaSemana = parseInt(
  prompt("Digite un numero para saber que dia de la semana es")
);

switch (diaSemana) {
  case 1:
    console.log("Es lunes");
    break;
  case 2:
    console.log("Es Martes");
    break;
  case 3:
    console.log("Es Miercoles");
    break;
  case 4:
    console.log("Es Jueves");
    break;
  case 5:
    console.log("Es Viernes");
    break;
  case 6:
    console.log("Es Sabado");
    break;
  case 7:
    console.log("Es Domingo");
    break;
  default:
    console.log("Favor digite unicamente numeros del 1-7");
    break;
}

let nota = parseInt(prompt("Digite una nota"));

switch (true) {
  case nota >= 90:
    console.log("Tu nota es una A");
    break;
  case nota >= 70 && nota < 90:
    console.log("Tu nota es una B");
    break;
  case nota < 70:
    console.log("Tu nota es una C");
    break;
}

let sumaFor = 0;

for (let i = 0; i <= 100; i++) {
  sumaFor += i;
}
console.log("La suma de los primeros 100 numeros es: " + sumaFor);

let i = 0;
let sumaWhile = 0;
while (i <= 100) {
  sumaWhile += i;
  i++;
}

console.log("La suma de los primeros 100 numeros es: " + sumaWhile);

let frutas = ["mango", "banano", "pera"];
console.log(frutas[0]);
console.log(frutas[2]);
console.log(frutas.length);
frutas.push("papaya");
frutas.unshift("manzana");
console.log("Frutas despues de insertar nuevas: " + frutas);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let n = parseInt(prompt("Digite un numero para calcular su factorial"));

function factorial(n) {
  if (n === 0 || n === 1) {
    console.log("El factorial no se puede calcular con este numero");
  }

  let resultado=1;
  for (let i = 1; i <=n; i++) {
    resultado*=i;
  }
  return resultado; 
}

console.log(factorial(n));
