alert('tenemos que cumplir esta mision soldado');
var tiempo = parseInt(prompt('¿En cuántos segundos quieres que se detone la bomba? recuerda que solo tenemos un minuto'));

if (isNaN(tiempo) || tiempo <= 0 || tiempo>60) {
  alert('MISION FALLIDA');
} else {
  document.querySelector('#bomba').innerHTML = 'La bomba estallara en ' + tiempo + ' segundos';

  for (var i = tiempo - 1; i >= 0; i--) {
    setTimeout(function (contador) {
      document.querySelector('#bomba').innerHTML = 'La bomba estallara en ' + contador + ' segundos';

      if (contador === 0) {
        document.querySelector('#bomba').innerHTML = '¡La bomba ha detonado!';
      }
    }, (tiempo - i) * 1000, i);
  }
}

