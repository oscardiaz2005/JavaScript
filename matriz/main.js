function generarMatriz() {
    const filas = document.getElementById('filas').value;
    const columnas = document.getElementById('columnas').value;

    if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
      alert('Por favor, ingrese números válidos para filas y columnas.');
      return;
    }

    const matriz = [];
    for (let i = 0; i < filas; i++) {
      matriz[i] = [];
      for (let j = 0; j < columnas; j++) {
        let numero;
        do {
          numero = Math.floor(Math.random() * 200) + 1;
        } while (matriz.flat().includes(numero)); 
        matriz[i][j] = numero;
      }
    }

    // Encontro el número mayor y su posición
    let mayor = matriz[0][0];
    let filaMayor = 0;
    let columnaMayor = 0;
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        if (matriz[i][j] > mayor) {
          mayor = matriz[i][j];
          filaMayor = i;
          columnaMayor = j;
        }
      }
    }

    // Muestror la matriz 
    mostrarMatriz(matriz, filas, columnas, filaMayor, columnaMayor);
  }

  function mostrarMatriz(matriz, filas, columnas, filaMayor, columnaMayor) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    // Creor la tabla
    const tabla = document.createElement('table');
    for (let i = 0; i < filas; i++) {
      const fila = document.createElement('tr');
      for (let j = 0; j < columnas; j++) {
        const celda = document.createElement('td');
        celda.textContent = matriz[i][j];
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
    resultadoDiv.appendChild(tabla);

    const posicionDiv = document.createElement('div');
    posicionDiv.textContent = `El número mayor es ${matriz[filaMayor][columnaMayor]} en la posición (${filaMayor + 1}, ${columnaMayor + 1}).`;
    resultadoDiv.appendChild(posicionDiv);
  }