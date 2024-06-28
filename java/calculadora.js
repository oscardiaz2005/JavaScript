var num1 = parseInt(prompt('Ingresa el primer número'));
var num2 = parseInt(prompt('Ingresa el segundo número'));

alert('¿Qué operación deseas realizar?');
var operacion = parseInt(prompt('1. Suma  2. Resta  3. Multiplicación  4. División'));

var resultado;

switch (operacion) {
    case 1:
        resultado = num1 + num2;
        alert('El resultado de la suma es: ' + resultado);
        break;

    case 2:
        resultado = num1 - num2;
        alert('El resultado de la resta es: ' + resultado);
        break;

    case 3:
        resultado = num1 * num2;
        alert('El resultado de la multiplicación es: ' + resultado);
        break;

    case 4:
        resultado = num1 / num2;
        alert('El resultado de la división es: ' + resultado);
        break;

    default:
        alert('Operación no válida');
}

