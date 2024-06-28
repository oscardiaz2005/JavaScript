const tablero =[]

let turno =0

const botonpulsado= (e , pos) =>{
    const boton=e.target;
   //verifico si la posicion esta ocupada
    if (tablero[pos]) {
        alert('Esta posición ya está ocupada. Por favor, elige otra.');
        return;
      }

      //funcionalidad del juego 
    const jugador= turno % 2 ? 'lightblue':'yellowgreen'
    boton.style.backgroundColor= jugador 
    boton.innerHTML= turno % 2  ?  `<span><b>X</b></span>` : `<span><b>0</b></span>`
    turno++
    tablero [pos]=jugador
    if(Ganador()){  
        alert('TENEMOS UN GANADOOR')   
        reiniciarJuego ()      
    }

    
}

//comparar posiciones
const Ganador = () => {
    if(tablero[0]==tablero[1] && tablero[0]==tablero[2] && tablero[0]) {
        return true
    }else if(tablero[3]==tablero[4] && tablero[3]==tablero[5]&& tablero[3]){
        return true
    }else if(tablero[6]==tablero[7] && tablero[6]==tablero[8] && tablero[6]){
        return true
    }else if(tablero[0]==tablero[3] && tablero[0]==tablero[6] && tablero[0]){
        return true
    }else if(tablero[1]==tablero[4] && tablero[1]==tablero[7] && tablero[1]){
        return true
    }else if(tablero[2]==tablero[5] &&tablero[2]==tablero[8] && tablero[2]){
        return true
    }else if(tablero[0]==tablero[4] && tablero[0]==tablero[8]&& tablero[0]){
        return true
    }else if(tablero[2]==tablero[4] && tablero[2]==tablero[6] && tablero[2]){
        return true
    } return false



  }


//reinicio tablero 
  const reiniciarJuego = () => {
    tablero.fill(undefined); 
    turno = 0;
  
    document.querySelectorAll('button').forEach((boton) => {
      boton.style.backgroundColor = '';
      boton.innerHTML = '';
    });
  };

//se realiza la funcion boton pulsado para cada click
document.querySelectorAll('button').forEach(
    (obj, i )=>obj.addEventListener('click',  (e) => botonpulsado(e,
    i)))   
    
 