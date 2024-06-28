function ejecutar() {
const cantidad = document.getElementById('cantidad').value
if ( cantidad<1){
    document.getElementById('ramdon').innerHTML= 'CANTIDAD EQUIVOCADA' 
document.getElementById('menor').innerHTML= ' CANTIDAD EQUIVOCADA ' 
    return
}
let nm = 1000
document.getElementById('ramdon').innerHTML= ' ' 
document.getElementById('menor').innerHTML= ' El numero menor es :  ' 


    for (i=0; i<cantidad; i++){
        var nx= Math.floor(Math.random()*100)   
        if (nx<nm){
            nm=nx
        }
        document.getElementById('ramdon').innerHTML+= ' ' + nx

    }   
      

    document.getElementById('menor').innerHTML+=  nm

}



