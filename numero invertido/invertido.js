function ninv (){
    var numero=parseInt(document.getElementById('numero').value)
var invertido=0
while(numero>0){
    residuo=numero%10
    invertido=invertido*10+residuo
    numero=parseInt(numero/10)
document.querySelector('#resultadoinvertido').innerHTML= invertido
}
}

