var number =0
var contador = 0
var nmayor= -89
var nmenor= 10000
for (i=0; number!=99 ;i++){
    number= Math.floor(Math.random()*100)+1
    contador++
    if(number<nmenor){
        nmenor=number
       }
       if(number>nmayor){
        nmayor=number
       }
    console.log(number)  
    console.log(contador)  
    

}
document.getElementById('cantidad').innerHTML+=contador
document.getElementById('mayor').innerHTML+=nmayor
document.getElementById('menor').innerHTML+=nmenor

