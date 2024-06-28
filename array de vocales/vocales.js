
     const a = [
        { nombre: 'Avion', imagen: 'https://concepto.de/wp-content/uploads/2023/01/avion.jpg' },
        { nombre: 'Andromeda', imagen: 'https://upload.wikimedia.org/wikipedia/commons/5/57/M31bobo.jpg' },
        { nombre: 'Azafata', imagen: 'https://www.turijobs.com/blog/wp-content/uploads/2018/12/curso-auxiliar-vuelo-alicante3-1024x675.png' }
    ]
     const e= [
        { nombre: 'Elefante', imagen: 'https://www.nationalgeographic.com.es/medio/2020/03/04/elefante-en-el-parque-nacional-de-amboseli-con-el-kilimanjaro-al-fondo_4308fa58_800x800.jpg' },
        { nombre: 'Estudiante', imagen: 'https://holatelcel.com/wp-content/uploads/2022/08/hombre-estudiante-universitario.jpg' },
        { nombre: 'Electro', imagen: 'https://images.thedirect.com/media/article_full/electro-foxx.jpg' }
    ]
     const i = [
        { nombre: 'Iman', imagen: 'https://img.freepik.com/vector-gratis/iman-forma-u-dos-polos_1308-19061.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph' },
        { nombre: 'Imaginacion', imagen: 'https://img.freepik.com/vector-gratis/concepto-imaginacion-nina_23-2147532434.jpg' },
        { nombre: 'Iguana', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Polish_20230102_131307806_%281%29.jpg/1200px-Polish_20230102_131307806_%281%29.jpg' }
    ]
     const o = [
        { nombre: 'Oso', imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/11/oso-Bart.jpg?quality=100&strip=info&w=460&h=260&crop=1' },
        { nombre: 'Ostia', imagen: 'https://s1.significados.com/foto/hostia_sm.jpg' },
        { nombre: 'Oreo', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oreo-Two-Cookies.jpg/800px-Oreo-Two-Cookies.jpg' }
    ]
     const u= [
        { nombre: 'Uña', imagen: 'https://statics-cuidateplus.marca.com/cms/color-unas.jpg' },
        { nombre: 'Ucrania', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png' },
        { nombre: 'U-3', imagen: 'https://lh3.googleusercontent.com/U6xk46vfoQ_Bp-AR1xvBegkhCb1BtM8_i0MsXbPfmTrHN8Kf3TM6tUdpT_RILxBt_ztNMHXnds7duwIDQ6PTPqOtoHeDFHdAIUNgXV41j8A4' }
    ]

function mostrar() {
    let vocal = document.getElementById('vocal').value.toLowerCase();
    switch (vocal) {
        case 'a':
            imagen1.innerHTML =  `<p>${a[0].nombre} </p>` + ` <img src="${a[0].imagen}" class="img">`;
            imagen2.innerHTML = `<p>${a[1].nombre} </p>` + ` <img src="${a[1].imagen}" class="img">`;
            imagen3.innerHTML = `<p>${a[2].nombre} </p>` + ` <img src="${a[2].imagen}" class="img">`;
            break;
        case 'e':
            imagen1.innerHTML = `<p>${e[0].nombre} </p>` + ` <img src="${e[0].imagen}" class="img">`;
            imagen2.innerHTML = `<p>${e[1].nombre} </p>` + ` <img src="${e[1].imagen}" class="img">`;
            imagen3.innerHTML = `<p>${e[2].nombre} </p>` + ` <img src="${e[2].imagen}" class="img">`;
            break;
        case 'i':
            imagen1.innerHTML = `<p>${i[0].nombre} </p>` + ` <img src="${i[0].imagen}" class="img">`;
            imagen2.innerHTML = `<p>${i[1].nombre} </p>` + ` <img src="${i[1].imagen}" class="img">`;
            imagen3.innerHTML = `<p>${i[2].nombre} </p>` + ` <img src="${i[2].imagen}" class="img">`;
            break;
        case 'o':
            imagen1.innerHTML = `<p>${o[0].nombre} </p>` + ` <img src="${o[0].imagen}" class="img">`;
            imagen2.innerHTML = `<p>${o[1].nombre} </p>` + ` <img src="${o[1].imagen}" class="img">`;
            imagen3.innerHTML = `<p>${o[2].nombre} </p>` + ` <img src="${o[2].imagen}" class="img">`;
            break;
        case 'u':
            imagen1.innerHTML = `<p>${u[0].nombre} </p>` + ` <img src="${u[0].imagen}" class="img">`;
            imagen2.innerHTML = `<p>${u[1].nombre} </p>` + ` <img src="${u[1].imagen}" class="img">`;
            imagen3.innerHTML = `<p>${u[2].nombre} </p>` + ` <img src="${u[2].imagen}" class="img">`;
            break;
        default:
            alert('Vocal no válida');
            return;
    }
}
