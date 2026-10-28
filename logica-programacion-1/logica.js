let num1 = prompt("Introduce un número del 1 al 10:");
let numero1 = Number(num1);

let num2 = prompt("Introduce otro número del 1 al 10:");
let numero2 = Number(num2);

let num3 = prompt("Introduce otro número del 1 al 10:");
let numero3 = Number(num3);

if (
    !Number.isInteger(numero1) || numero1 < 1 || numero1 > 10 ||
    !Number.isInteger(numero2) || numero2 < 1 || numero2 > 10 ||
    !Number.isInteger(numero3) || numero3 < 1 || numero3 > 10
) {
    alert("Error: introduce tres números enteros del 1 al 10.");

} else if (numero1 === numero2 && numero2 === numero3) {

   
alert("Los tres números son iguales: " + numero1);


} else {

let menor;
let medio;
let mayor;

if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1;

    if (numero2 <= numero3) {
        medio = numero2;
        mayor = numero3;
    } else {
        medio = numero3;
        mayor = numero2;
    }

} else if (numero2 <= numero1 && numero2 <= numero3) {
    menor = numero2;

    if (numero1 <= numero3) {
        medio = numero1;
        mayor = numero3;
    } else {
        medio = numero3;
        mayor = numero1;
    }

} else {
    menor = numero3;

    if (numero1 <= numero2) {
        medio = numero1;
        mayor = numero2;
    } else {
        medio = numero2;
        mayor = numero1;
    }
}

alert(
    "De menor a mayor: " +
    menor + ", " + medio + ", " + mayor
);

alert(
    "De mayor a menor: " +
    mayor + ", " + medio + ", " + menor
);

}


