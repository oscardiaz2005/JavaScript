
alert('BIENVENIDO')
var nivel = prompt('¿En qué nivel académico estás?--- secundaria/profesional')

while (!(nivel.toLowerCase() === 'secundaria' || nivel.toLowerCase() === 'profesional')) {
    alert('Respuesta inválida')
    nivel = prompt('¿En qué nivel académico estás?--- secundaria/profesional')
}

var promedio = parseFloat(prompt('¿Qué promedio obtuviste?'))

while (promedio < 0 || promedio > 10 ) {
    alert('Tu promedio no puede ser menor a cero ni mayor a 10')
    promedio = parseFloat(prompt('¿Qué promedio obtuviste?'))
}

var reprobadas = parseInt(prompt('¿Cuántas materias reprobaste?'))

while (reprobadas < 0  || reprobadas >10) {
    alert('Tus materias reprobadas no son validas')
    reprobadas = parseInt(prompt('¿Cuántas materias reprobaste?'))
}

if (promedio >= 9.5 && nivel.toLowerCase() === 'secundaria') {
    let unidades = 55
    let pago = (unidades / 5) * 180
    let pago_descuento = pago * 0.25
    let total= pago-pago_descuento
    alert('FELICITACIONES, puedes cursar 55 unidades y tendrás un 25% de descuento')
    alert('Tienes que pagar un valor de ' + total + ' este valor incluye el 25% de descuento')
}

if ((promedio >= 9 && promedio < 9.5) && nivel.toLowerCase() === 'secundaria') {
    let unidades = 50
    let pago = (unidades / 5) * 180
    let pago_descuento = pago * 0.10
    let total= pago-pago_descuento

    alert('FELICITACIONES, puedes cursar 50 unidades y tendrás un 10% de descuento')
    alert('Tienes que pagar un valor de ' + total + ' este valor incluye el 10% de descuento')
}

if ((promedio > 7 && promedio < 9) && nivel.toLowerCase() === 'secundaria') {
    let unidades = 50
    let pago = (unidades / 5) * 180
    alert('FELICITACIONES, puedes cursar 50 unidades pero no tendrás ningún descuento:(')
    alert('Tienes que pagar un valor de ' + pago);
}

if (promedio <= 7 && (reprobadas >= 0 && reprobadas <= 3) && nivel.toLowerCase() === 'secundaria') {
    let unidades = 45
    let pago = (unidades / 5) * 180
    alert('FELICITACIONES, puedes cursar 45 unidades pero no tendrás ningún descuento:(')
    alert('Tienes que pagar un valor de ' + pago)
}

if (promedio <= 7 && (reprobadas >= 0 && reprobadas > 3) && nivel.toLowerCase() === 'secundaria') {
    let unidades = 40
    let pago = (unidades / 5) * 180
    alert('FELICITACIONES, puedes cursar 40 unidades pero no tendrás ningún descuento:(')
    alert('Tienes que pagar un valor de ' + pago)
}

if (promedio >= 9.5 && nivel.toLowerCase() === 'profesional') {
    let unidades = 55
    let pago = (unidades / 5) * 300
    let pago_descuento = pago * 0.20
    let total= pago-pago_descuento

    alert('FELICITACIONES, puedes cursar 55 unidades y tendrás un 20% de descuento')
    alert('Tienes que pagar un valor de ' + total + ' este valor incluye el 25% de descuento')
}

if (promedio <9.5 && nivel.toLowerCase() === 'profesional') {
    let unidades = 55
    let pago = (unidades / 5) * 300
    alert('FELICITACIONES, puedes cursar 55 unidades pero no tendras descuento:(')
    alert('Tienes que pagar un valor de ' + pago )
}








