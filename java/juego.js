// Definimos un array con los nombres de los niveles
var niveles = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5'];

// Definimos un array con la dificultad de cada nivel
var dificultad = ['Fácil', 'Intermedio', 'Difícil', 'Muy difícil', 'Experto'];

// Iteramos sobre los niveles utilizando un bucle for
for (var i = 0; i < niveles.length; i++) {
  console.log('Nombre del nivel: ' + niveles[i]);
  console.log('Dificultad: ' + dificultad[i]);
  console.log('---');
}
