alert('bienvenido al programa de las esferas del dragon')
var casa_goku= parseInt(prompt('¿cual es la distancia a la casa de goku?'))
 var distancia_proxima_esfera=(casa_goku*2)+4
 var tiempo=(casa_goku+distancia_proxima_esfera)/5

if (tiempo>=0 & tiempo<=20 ){
    alert ('la distancia a la casa de goku es de '+casa_goku)
    alert ('la distancia a la proxima esfera  es de '+distancia_proxima_esfera)
    alert( 'el tiempo de duracion del viaje es aproximadamente de '+ tiempo)
    alert ('la esfera del dragon que estas buscando es la numero 1')
}

if (tiempo>=21 & tiempo<=30){
    alert ('la distancia a la casa de goku es de '+casa_goku)
    alert ('la distancia a la proxima esfera  es de '+distancia_proxima_esfera)
    alert( 'el tiempo de duracion del viaje es aproximadamente de '+ tiempo)
    alert ('la esfera del dragon que estas buscando es la numero 2') 
}

if (tiempo>=31 & tiempo<=50 ){
alert ('la distancia a la casa de goku es de '+casa_goku)
alert ('la distancia a la proxima esfera  es de '+distancia_proxima_esfera)
alert( 'el tiempo de duracion del viaje es aproximadamente de '+ tiempo)
alert ('la esfera del dragon que estas buscando es la numero 3')
}

if (tiempo>50){
alert ('la distancia a la casa de goku es de '+casa_goku)
alert ('la distancia a la proxima esfera  es de '+distancia_proxima_esfera)
alert( 'el tiempo de duracion del viaje es aproximadamente de '+ tiempo)
alert ('la esfera del dragon que estas buscando es la numero 4')
}