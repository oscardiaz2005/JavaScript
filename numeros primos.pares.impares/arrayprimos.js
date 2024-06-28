let numeros = [];
for ( i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1)
}

for (i=0;i<numeros.length;i++){
document.getElementById('array').innerHTML+= ` <p> ${numeros[i] + '--'} <p>`
}

let primerNumero = numeros[0];
let ultimoNumero = numeros[numeros.length - 1];
let sumaPrimerUltimo = primerNumero + ultimoNumero;

numeros.forEach((element, indice) => {
    let esPar = element % 2 == 0
    let esPrimo = true;

    if (element < 2) {
        esPrimo = false
    } else {
        for (let i = 2; i < element/2; i++) {
            if (element % i === 0) {
                esPrimo = false
                break
            }
        }
    }
    if (esPar) {
        document.getElementById('par').innerHTML+= ` <p>${element} es número par y esta en el indice ${indice} </p>`
    }

    if (!esPar) {
        document.getElementById('impar').innerHTML+= ` <p>${element} es número impar  y esta en el indice ${indice} </p>`
    }

    if (esPrimo) {
        document.getElementById('primo').innerHTML+= ` <p>${element} es número primo  y esta en el indice ${indice} </p>`
    }
})
document.getElementById('suma').innerHTML+=`La suma del primer y último número es: ${sumaPrimerUltimo}`

