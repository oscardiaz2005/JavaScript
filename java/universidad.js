var nombre=prompt('ingrese su nombre completo ')
var edad=parseInt(prompt('ingrese su edad'))
var puntaje= parseInt(prompt('ingrese su puntaje obtnido en el examen '))
var salario = parseFloat(prompt('ingrse la cantidad de salarios minimos '))

var porcentajeEdad = 0;
var porcentajeIngreso = 0;
var porcentajePuntaje = 0;
var porcentajeTotal = 0;

if (edad >= 15 && edad <= 18) {
    porcentajeEdad = 0.25;
} else if (edad >= 19 && edad <= 21) {
    porcentajeEdad = 0.15;
} else if (edad >= 22 && edad <= 25) {
    porcentajeEdad = 0.10;
}

if (salario <= 1) {
    porcentajeIngreso = 0.30;
} else if (salario <= 2) {
    porcentajeIngreso = 0.20;
} else if (salario <= 3) {
    porcentajeIngreso = 0.10;
} else if (salario <= 4) {
    porcentajeIngreso = 0.05;
}

if (puntaje >= 80 && puntaje < 86) {
    porcentajePuntaje = 0.30;
} else if (puntaje >= 86 && puntaje < 91) {
    porcentajePuntaje = 0.35;
} else if (puntaje >= 91 && puntaje < 96) {
    porcentajePuntaje = 0.40;
} else if (puntaje >= 96) {
    porcentajePuntaje = 0.45;
}

porcentajeTotal = porcentajeEdad + porcentajeIngreso + porcentajePuntaje;
document.querySelector('#output'). innerHTML = ( nombre+ ' tu porcentaje de descuento por tu edad es de ' + porcentajeEdad + ' tu porcentaje de descuento por tus salarios es de ' + porcentajeIngreso + ' tu porcentaje de descuento por tu puntaje en el examen es de  ' + porcentajePuntaje +' tu porcentaje de descuento total es de '+porcentajeTotal)





