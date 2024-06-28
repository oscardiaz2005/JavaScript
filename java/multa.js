alert('bienvenido')
var distancia= parseInt(prompt('ingrese la distancia '))
var velocidadpermitida= parseInt(prompt('ingrese la velocidad '))
var tiempo= parseInt(prompt('ingrese el tiempo que tarda en recorrer el trayecto '))

km= distancia/1000
h= tiempo/3600
vm= km/h
limite=velocidadpermitida*(1.2)


if (vm<=0 | distancia<=0 | tiempo<=0 | velocidadpermitida<=0 | limite<=0) {
alert('error')
} 
if ( vm>0 &  vm<=velocidadpermitida ) {
    alert('ok')
    }
if( vm>velocidadpermitida & vm<limite ) {
    alert('multa')
    }
if( vm>=limite ){
    alert('curso de sensibilizacion')
     }

   
 


    

