
let vendedores = [];
let ventas = [];

//  agregar o actualizar un vendedor
function agregarVendedor() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const celular = document.getElementById('celular').value;
    const documento = document.getElementById('documento').value;

    // Busco si ya existe un vendedor con el mismo documento
    const existingVendedorIndex = vendedores.findIndex(v => v.documento === documento);

    // Si existe lo actualizo si no agregar uno nuevo
    if (existingVendedorIndex !== -1) {
        vendedores[existingVendedorIndex] = { nombre, apellido, celular, documento };
    } else {
        vendedores.push({ nombre, apellido, celular, documento });
    }

    // Actualizar la tabla 
    actualizarTablaVendedores();
    // Limpiar el formulario
    limpiarFormulario('vendedorForm');
}

//  editar un vendedor
function editarVendedor(index) {
    // Obtener el vendedor seleccionado
    const vendedor = vendedores[index];

    // Llenar el formulario con los datos 
    document.getElementById('nombre').value = vendedor.nombre;
    document.getElementById('apellido').value = vendedor.apellido;
    document.getElementById('celular').value = vendedor.celular;
    document.getElementById('documento').value = vendedor.documento;


}

//guardar cambios 
function guardarCambios() {
    // Obtener el índice del vendedor que se está editando
    const index = document.getElementById('guardarBtn').getAttribute('data-index');
    // Obtener datos 
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const celular = document.getElementById('celular').value;
    const documento = document.getElementById('documento').value;

    // Actualizar el vendedor 
    vendedores[index] = { nombre, apellido, celular, documento };

    // Actualizar la tabla 
    actualizarTablaVendedores();
    // Limpiar el formulario 
    limpiarFormulario('vendedorForm');
}

function eliminarVendedor(index) {
    vendedores.splice(index, 1);
    actualizarTablaVendedores();
}


// agregar una venta
function agregarVenta() {
    const documentoVenta = document.getElementById('documentoVenta').value;
    const producto = document.getElementById('producto').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Buscar el vendedor correspondiente al documento 
    const vendedor = vendedores.find(v => v.documento === documentoVenta);

    // Si no se encuentra  mostro una  alerta 
    if (!vendedor) {
        alert('No se encontró un vendedor con este documento.');
        return;
    }

    // Calcular la comisión 
    const comision = (precio * cantidad * 0.1).toFixed(2);
    const venta = {
        vendedor: `${vendedor.nombre} ${vendedor.apellido}`,
        producto,
        cantidad,
        precio,
        comision
    };

    ventas.push(venta);

    actualizarTablaVentas();

    limpiarFormulario('ventaForm');
}

// ¿eliminar una venta
function eliminarVenta(index) {
    // Eliminar la venta del arreglo de ventas
    ventas.splice(index, 1);

    actualizarTablaVentas();
}

// actualizar la tabla 
function actualizarTablaVentas() {
    const bodyVentas = document.getElementById('bodyVentas');
    bodyVentas.innerHTML = '';

    ventas.forEach((venta, index) => {
        const row = `<tr>
                        <td>${venta.vendedor}</td>
                        <td>${venta.producto}</td>
                        <td>${venta.cantidad}</td>
                        <td>${venta.precio}</td>
                        <td>${venta.comision}</td>
                        <td>
                            <button onclick="eliminarVenta(${index})">Eliminar</button>
                        </td>
                    </tr>`;
        bodyVentas.innerHTML += row;
    });
}



// Función para obtener el documento de un vendedor a partir de su nombre completo
function obtenerDocumentoVendedor(nombreCompleto) {
    // Separo el nombre y el apellido
    const [nombre, apellido] = nombreCompleto.split(' ');
    // Busco el vendedor 
    const vendedor = vendedores.find(v => v.nombre === nombre && v.apellido === apellido);
    // Devuelvo el documento si se encuentra sino otorgo un valor vacio
    return vendedor ? vendedor.documento : '';
}

// mostrar la comisión total 
function mostrarComisionTotal() {
    const documentoComision = document.getElementById('documentoComision').value;

    const vendedor = vendedores.find(v => v.documento === documentoComision);

    if (!vendedor) {
        alert('No se encontró un vendedor con este documento.');
        return;
    }

    // Filtro las ventas  del vendedor
    const ventasVendedor = ventas.filter(v => obtenerDocumentoVendedor(v.vendedor) === documentoComision);
    // Calculo la comisión total sumando las comisiones de las ventas
    const comisionTotal = ventasVendedor.reduce((total, venta) => total + parseFloat(venta.comision), 0).toFixed(2);

    // Actualizar la tabla de comisión 
    const bodyComisionTotal = document.getElementById('bodyComisionTotal');
    bodyComisionTotal.innerHTML = `<tr>
                                        <td>${vendedor.nombre} ${vendedor.apellido}</td>
                                        <td>${comisionTotal}</td>
                                    </tr>`;
}


function limpiarFormulario(formularioId) {
    document.getElementById(formularioId).reset();
}


function actualizarTablaVendedores() {
    const bodyVendedores = document.getElementById('bodyVendedores');
    bodyVendedores.innerHTML = '';
    vendedores.forEach((vendedor, index) => {
        const row = `<tr>
                        <td>${vendedor.nombre}</td>
                        <td>${vendedor.apellido}</td>
                        <td>${vendedor.celular}</td>
                        <td>${vendedor.documento}</td>
                        <td>
                            <button  class='delete' onclick="eliminarVendedor(${index})">Eliminar</button>
                            <button  class='edit' onclick="editarVendedor(${index})">Editar</button>
                        </td>
                    </tr>`;
        bodyVendedores.innerHTML += row;
    });
}

