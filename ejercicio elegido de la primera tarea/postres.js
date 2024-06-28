alert('Bienvenido a nuestra tienda de postres');
alert('Tenemos 7 increíbles postres para ofrecerte, los cuales son:');
alert('1. Postre de chocolate - Precio: 5000');
alert('2. Postre de limón - Precio: 3500');
alert('3. Postre de naranja - Precio: 2400');
alert('4. Postre de fresa - Precio: 3000');
alert('5. Postre tres leches - Precio: 8000');
alert('6. Helado de vainilla - Precio: 1500');
alert('7. Brownie - Precio: 1000');

let precio1 = 5000;
let precio2 = 3500;
let precio3 = 2400;
let precio4 = 3000;
let precio5 = 8000;
let precio6 = 1500;
let precio7 = 1000;
let totalFinal = 0;

let respuesta;

do {
  let postre;
  do {
    postre = parseInt(prompt('Digite el número del postre que quiere comprar'));
  } while (postre <= 0 || postre > 7);

  let cantidad;
  do {
    cantidad = parseInt(prompt('Digite el número de unidades que quieres comprar'));
    if (cantidad < 0) {
      alert('Cantidad equivocada. Ingrese la cantidad deseada nuevamente.');
    }
  } while (cantidad < 0);

  let total;

  switch (postre) {
    case 1:
      total = precio1 * cantidad;
      totalFinal += total;
      break;
    case 2:
      total = precio2 * cantidad;
      totalFinal += total;
      break;
    case 3:
      total = precio3 * cantidad;
      totalFinal += total;
      break;
    case 4:
      total = precio4 * cantidad;
      totalFinal += total;
      break;
    case 5:
      total = precio5 * cantidad;
      totalFinal += total;
      break;
    case 6:
      total = precio6 * cantidad;
      totalFinal += total;
      break;
    case 7:
      total = precio7 * cantidad;
      totalFinal += total;
      break;
    default:
      alert('Número de postre no válido.');
  }

  do {
    respuesta = prompt('¿Desea comprar más postres? (si/no)').toLowerCase();
    if (respuesta !== 'si' && respuesta !== 'no') {
      alert('Respuesta inválida. Intente nuevamente.');
    }
  } while (respuesta !== 'si' && respuesta !== 'no');

  if (respuesta === 'no') {
    alert('De acuerdo, gracias por tu compra. Tu cuenta es de ' + totalFinal);
  }

} while (respuesta === 'si');

