var cantidadramdon=[]
var nmenor=10000
var nmayor=-78
contador =0
var posmen=0
var posmay=0
function numeror (){
    var cantidad=document.getElementById('cantidad').value
    if ( cantidad<0)
    {
    document.querySelector('#numeros').innerHTML='Cantidad equivocada'
    return  
    }
    for(i=0;i<cantidad;i++){
       var xx= Math.floor(Math.random()*100)   
       cantidadramdon.push(xx)
       contador=contador+1

       if(xx<nmenor){
        nmenor=xx
        posmen=contador-1
       }
       if(xx>nmayor){
        nmayor=xx
        posmay=contador-1
       }
    }
    console.log(cantidadramdon)
    document.querySelector('#numeros').innerHTML+=cantidadramdon

    document.querySelector('#MAYOR').innerHTML+= nmayor
    document.querySelector('#MENOR').innerHTML+= nmenor
    document.querySelector('#INDICE1').innerHTML+= posmay
    document.querySelector('#INDICE2').innerHTML+= posmen
}





