var fruits =["orange", "apple"," pear","kiwi","mango"]
/* psuh para agregar ,pop para eliminar ,lenght para mostrar cantidad de elementos en el array */ 
console.log( fruits[1] ,fruits[2] ,fruits[4])
console.log(fruits)
fruits.push('banana')
fruits.push('avocado')
fruits.push('grapes')
fruits.push('tomatto')
console.log(fruits.length)

mostrar()
function mostrar() {
    var table =document.getElementById('table')
table.innerHTML =  `<tr>
<th>cod</th>
<th>frutas</th>
<tr/>
`

for(i=0;i< fruits.length;i++){
    table.innerHTML +=`
    <tr>
    <td>${i}</td>
    <td>${fruits[i]}</td>
    </tr>`
}
}

function agregar(){
    var nuevo=document.getElementById('fruta').value
    if(nuevo==''){
        return
    }
    fruits.push(nuevo)
    mostrar() 
}

function how(){
    hola.innerHTML=fruits.length
}

function change (){
    var newvalor=document.getElementById('number').value
    if(newvalor>fruits.length){
        return
    }
    var newfruit=document.getElementById('newvalor').value
    fruits[newvalor]=newfruit
    mostrar()
}

