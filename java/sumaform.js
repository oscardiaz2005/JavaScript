function hola(){
    var n1= parseInt(document.getElementById('number1').value)
    var n2=parseInt(document.getElementById('number2').value)
    var suma = n1+n2
    document.querySelector('#suma').innerHTML =  suma ;
}


function resultresta(){
    var nr1=parseInt(document.getElementById('numero1').value)
    var nr2=parseInt(document.getElementById('numero2').value)

    var reste=nr1-nr2
    document.querySelector('#resultadoresta').innerHTML= reste 




}