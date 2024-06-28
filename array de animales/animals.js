
const animals = [
    {
        name: "perro",
        image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
    },
    {
        name: "gato",
        image: "https://ca-times.brightspotcdn.com/dims4/default/0ca19fa/2147483647/strip/true/crop/2048x1108+0+0/resize/1200x649!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"
    },
    {
        name: "loro",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/95481341/1200"
    },
    {
        name: "leon",
        image: "https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.webp?w=1450&h=816"
    },
    {
        name: "tigre",
        image: "https://s1.eestatic.com/2023/07/29/ciencia/782681856_235038553_1706x960.jpg"
    },
    {
        name: "pez",
        image: "https://www.nationalgeographic.com.es/medio/2022/12/12/pez-1_624921b9_221212160925_1280x720.jpg"
    },
    {
        name: "tortuga",
        image: "https://img.freepik.com/vector-premium/tortuga-caricatura-clipart-vector-ilustracion_576561-431.jpg?w=740"
    },
    {
        name: "ballena",
        image: "https://media.es.wired.com/photos/64da9127e1a6747931982f30/16:9/w_1600,c_limit/tutcetus%20rayanensis%20ballena%20desierto%20egipto.jpg"
    },
    {
        name: "piraña",
        image: "https://media.istockphoto.com/id/92121157/es/foto/.jpg?s=612x612&w=0&k=20&c=r2oxTh8Jr8YquWg5jFCqljR3VByfPCJFhnN_uwAP8ZE="
    },
    {
        name: "oso",
        image: "https://media.istockphoto.com/id/1017220160/es/foto/gran-retrato-de-oso-pardo-los-c%C3%A1rpatos-en-la-rumania-de-europa-bosques.jpg?s=612x612&w=0&k=20&c=Cw6QlfSH-bnNuxEkXOcNYApAbzDo3eRqoZvy8LyzTsI="
    },
    {
        name: "gorila",
        image: "https://media.istockphoto.com/id/683300744/es/foto/todav%C3%ADa-de-gorilas-de-ruanda.jpg?s=612x612&w=0&k=20&c=jOShs8_iEohv7kEEJUZ3wmag404AgeDxGr1i6j3y-j0="
    },
    {
        name: "zebra",
        image: "https://media.istockphoto.com/id/115962508/es/foto/cebra.jpg?s=612x612&w=0&k=20&c=33a7lnRCAPOjUXZoZGd0ZbBUtd7UQ4N1AGKZITdFfeI="
    },
    {
        name: "nutria",
        image: "https://media.istockphoto.com/id/631933162/es/foto/nutria.jpg?s=612x612&w=0&k=20&c=1R9p5WZA92O3JL-t0LjH9ljPFSbRokJmWfYBqR5jN6s="
    },
    {
        name: "aguila",
        image: "https://media.istockphoto.com/id/168511255/es/foto/%C3%A1guila-de-cabeza-blanca.jpg?s=612x612&w=0&k=20&c=CbwvQYN-c8kuWKAahqLOan0NpW3Owg0QWKQEx1MUTq0="
    },
    {
        name: "caballo",
        image: "https://media.istockphoto.com/id/1358464345/es/foto/yegua-y-potro.jpg?s=612x612&w=0&k=20&c=kA6e2xO-JGBVgSiwuewg8g-g72kshOJulwlMgqZc8i4="
    },

  
];

mostrar();

function mostrar() {
    var table = document.getElementById('table');
    table.innerHTML =  `<tr>
        <th>codigo</th>
        <th>animal</th>
        <tr/>
    `;

    for (i = 0; i < animals.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${i}</td>
            <td>${animals[i].name}</td>
        </tr>`;
    }
}

function animalr() {
    const aleatorio = Math.floor(Math.random() * animals.length);
    alazar.innerHTML = animals[aleatorio].name;
    alazar.innerHTML += ` ${aleatorio} <img src="${animals[aleatorio].image}" class="img">`;
}

function animalcode() {
    const code = document.getElementById('code').value;
    if (code >= 0 && code < animals.length) {
        alazar.innerHTML = animals[code].name;
        alazar.innerHTML += ` ${code} <img src="${animals[code].image}" class="img">`;
    } else {
        alazar.innerHTML = 'Código de animal no válido';
    }
}












































































































































































































































/*var animals =["perro", "gato","loro","leon","tigre","pez","tortuga","ballena","piraña","oso","gorila","zebra","nutria","aguila","caballo"]

mostrar()
function mostrar() {
    var table =document.getElementById('table')
table.innerHTML =  `<tr>
<th>codigo</th>
<th>animal</th>
<tr/>
`

for(i=0;i< animals.length;i++){
    table.innerHTML +=`
    <tr>
    <td>${i}</td>
    <td>${animals[i]}</td>
    </tr>`
}
}



function animalr (){
    const aleatorio = animals[Math.floor(Math.random() * animals.length)];
    alazar.innerHTML = aleatorio; 

   switch (aleatorio) {
    case animals[0]:
        alazar.innerHTML+=` 0 <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*" class="img">`
        break;
    case animals[1]:
        alazar.innerHTML+=` 1 <img class="img" src="https://ca-times.brightspotcdn.com/dims4/default/0ca19fa/2147483647/strip/true/crop/2048x1108+0+0/resize/1200x649!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001" alt="">`   
        break;
    case animals[2]:
        alazar.innerHTML+=` 2 <img class="img" src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/95481341/1200" alt="">`   
        break;
    case animals[3]:
        alazar.innerHTML+=` 3 <img class="img" src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.webp?w=1450&h=816" alt="">`   
        break;
    case animals[4]:
        alazar.innerHTML+=` 4 <img  class="img" src="https://s1.eestatic.com/2023/07/29/ciencia/782681856_235038553_1706x960.jpg" alt="">`   
        break;
    case animals[5]:
        alazar.innerHTML+=` 5 <img class="img" src="https://www.nationalgeographic.com.es/medio/2022/12/12/pez-1_624921b9_221212160925_1280x720.jpg" alt="">`   
        break;
    case animals[6]:
        alazar.innerHTML+=` 6 <img class="img" src="https://img.freepik.com/vector-premium/tortuga-caricatura-clipart-vector-ilustracion_576561-431.jpg?w=740" alt="">`   
        break;
    case animals[7]:
        alazar.innerHTML+=` 7 <img class="img" src="https://media.es.wired.com/photos/64da9127e1a6747931982f30/16:9/w_1600,c_limit/tutcetus%20rayanensis%20ballena%20desierto%20egipto.jpg" alt="">`   
        break;
    case animals[8]:
        alazar.innerHTML+=` 8 <img class="img" src="https://media.istockphoto.com/id/92121157/es/foto/.jpg?s=612x612&w=0&k=20&c=r2oxTh8Jr8YquWg5jFCqljR3VByfPCJFhnN_uwAP8ZE=" alt="">`   
        break;  
    case animals[9]:
        alazar.innerHTML+=` 9 <img class="img" src="https://media.istockphoto.com/id/1017220160/es/foto/gran-retrato-de-oso-pardo-los-c%C3%A1rpatos-en-la-rumania-de-europa-bosques.jpg?s=612x612&w=0&k=20&c=Cw6QlfSH-bnNuxEkXOcNYApAbzDo3eRqoZvy8LyzTsI=" alt="">`   
        break;   
        case animals[10]:
        alazar.innerHTML+=` 10 <img class="img" src="https://media.istockphoto.com/id/683300744/es/foto/todav%C3%ADa-de-gorilas-de-ruanda.jpg?s=612x612&w=0&k=20&c=jOShs8_iEohv7kEEJUZ3wmag404AgeDxGr1i6j3y-j0=" alt="">`   
        break; 
    case animals[11]:
        alazar.innerHTML+=` 11 <img class="img" src="https://media.istockphoto.com/id/115962508/es/foto/cebra.jpg?s=612x612&w=0&k=20&c=33a7lnRCAPOjUXZoZGd0ZbBUtd7UQ4N1AGKZITdFfeI=" alt="">`   
        break; 
    case animals[12]:
        alazar.innerHTML+=` 12 <img class="img" src="https://media.istockphoto.com/id/631933162/es/foto/nutria.jpg?s=612x612&w=0&k=20&c=1R9p5WZA92O3JL-t0LjH9ljPFSbRokJmWfYBqR5jN6s=" alt="">`   
        break; 
    case animals[13]:
        alazar.innerHTML+=` 13 <img class="img" src="https://media.istockphoto.com/id/168511255/es/foto/%C3%A1guila-de-cabeza-blanca.jpg?s=612x612&w=0&k=20&c=CbwvQYN-c8kuWKAahqLOan0NpW3Owg0QWKQEx1MUTq0=">`   
        break;   
    case animals[14]:
        alazar.innerHTML+=` 14 <img src="https://media.istockphoto.com/id/1358464345/es/foto/yegua-y-potro.jpg?s=612x612&w=0&k=20&c=kA6e2xO-JGBVgSiwuewg8g-g72kshOJulwlMgqZc8i4=" class="img" alt="">`
        break;           
}
}

function animalcode(){
    const code = animals[document.getElementById('code').value];
    alazar.innerHTML = '';

   switch (code) {
    case animals[0]:
        alazar.innerHTML+=`<img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*" class="img">`
        break;
    case animals[1]:
        alazar.innerHTML+=` 1 <img class="img" src="https://ca-times.brightspotcdn.com/dims4/default/0ca19fa/2147483647/strip/true/crop/2048x1108+0+0/resize/1200x649!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001" alt="">`   
        break;
    case animals[2]:
        alazar.innerHTML+=` 2 <img class="img" src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/95481341/1200" alt="">`   
        break;
    case animals[3]:
        alazar.innerHTML+=` 3 <img class="img" src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.webp?w=1450&h=816" alt="">`   
        break;
    case animals[4]:
        alazar.innerHTML+=` 4 <img  class="img" src="https://s1.eestatic.com/2023/07/29/ciencia/782681856_235038553_1706x960.jpg" alt="">`   
        break;
    case animals[5]:
        alazar.innerHTML+=` 5 <img class="img" src="https://www.nationalgeographic.com.es/medio/2022/12/12/pez-1_624921b9_221212160925_1280x720.jpg" alt="">`   
        break;
    case animals[6]:
        alazar.innerHTML+=` 6 <img class="img" src="https://img.freepik.com/vector-premium/tortuga-caricatura-clipart-vector-ilustracion_576561-431.jpg?w=740" alt="">`   
        break;
    case animals[7]:
        alazar.innerHTML+=` 7 <img class="img" src="https://media.es.wired.com/photos/64da9127e1a6747931982f30/16:9/w_1600,c_limit/tutcetus%20rayanensis%20ballena%20desierto%20egipto.jpg" alt="">`   
        break;
    case animals[8]:
        alazar.innerHTML+=` 8 <img class="img" src="https://media.istockphoto.com/id/92121157/es/foto/.jpg?s=612x612&w=0&k=20&c=r2oxTh8Jr8YquWg5jFCqljR3VByfPCJFhnN_uwAP8ZE=" alt="">`   
        break;  
    case animals[9]:
        alazar.innerHTML+=` 9 <img class="img" src="https://media.istockphoto.com/id/1017220160/es/foto/gran-retrato-de-oso-pardo-los-c%C3%A1rpatos-en-la-rumania-de-europa-bosques.jpg?s=612x612&w=0&k=20&c=Cw6QlfSH-bnNuxEkXOcNYApAbzDo3eRqoZvy8LyzTsI=" alt="">`   
        break;   
        case animals[10]:
        alazar.innerHTML+=` 10 <img class="img" src="https://media.istockphoto.com/id/683300744/es/foto/todav%C3%ADa-de-gorilas-de-ruanda.jpg?s=612x612&w=0&k=20&c=jOShs8_iEohv7kEEJUZ3wmag404AgeDxGr1i6j3y-j0=" alt="">`   
        break; 
    case animals[11]:
        alazar.innerHTML+=` 11 <img class="img" src="https://media.istockphoto.com/id/115962508/es/foto/cebra.jpg?s=612x612&w=0&k=20&c=33a7lnRCAPOjUXZoZGd0ZbBUtd7UQ4N1AGKZITdFfeI=" alt="">`   
        break; 
    case animals[12]:
        alazar.innerHTML+=` 12 <img class="img" src="https://media.istockphoto.com/id/631933162/es/foto/nutria.jpg?s=612x612&w=0&k=20&c=1R9p5WZA92O3JL-t0LjH9ljPFSbRokJmWfYBqR5jN6s=" alt="">`   
        break; 
    case animals[13]:
        alazar.innerHTML+=` 13 <img class="img" src="https://media.istockphoto.com/id/168511255/es/foto/%C3%A1guila-de-cabeza-blanca.jpg?s=612x612&w=0&k=20&c=CbwvQYN-c8kuWKAahqLOan0NpW3Owg0QWKQEx1MUTq0=">`   
        break;   
    case animals[14]:
        alazar.innerHTML+=` 14 <img src="https://media.istockphoto.com/id/1358464345/es/foto/yegua-y-potro.jpg?s=612x612&w=0&k=20&c=kA6e2xO-JGBVgSiwuewg8g-g72kshOJulwlMgqZc8i4=" class="img" alt="">`
        break;           
}
}
*/
