var nombre
nombre=(prompt('ingrese su nombre'))
var ladoa,ladob,ladoc
ladoa= parseInt(prompt('por favor ingrese el  primer  lado del  triangulo'))
ladob= parseInt(prompt('por favor ingrese el  segundo  lado del triangulo'))
ladoc= parseInt(prompt('por favor ingrese el  tercer lado del  triangulo'))

if (ladoa==ladob & ladoa==ladoc & ladob==ladoc) {
alert('teniendo en cuentan el valor de los lados ingresados tu triangulo es equilatero' )


}

if (ladoa==ladob & ladoc!=ladoa || ladob==ladoc & ladoa!=ladob || ladoa==ladoc & ladob!=ladoa) {
		alert ('teniendo en cuentan el valor de los lados ingresados tu triangulo es isosceles')
		}
        
if (ladoa!=ladob & ladoa!=ladoc & ladob!=ladoa & ladob!=ladoc & ladoc!=ladoa & ladoc!=ladob){
		
		alert( 'teniendo en cuentan el valor de los lados ingresados tu triangulo es escaleno')   
        }    