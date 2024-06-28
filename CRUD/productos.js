
 let products = [];
        
 // al  -1 cuando no se está editando , sino me hace interferencia
 let editingIndex = -1;

 //  agregar o editar un producto
 function addOrEditProduct() {
     const productName = document.getElementById('productName').value
     const productCode = document.getElementById('productCode').value
     const productQuantity = parseInt(document.getElementById('productQuantity').value, 10)
     const productPrice = parseFloat(document.getElementById('productPrice').value)


     // mirar si ya existe un producto con el mismo nombre
     const existingProductIndex = products.findIndex(product => product.name === productName)
     if (editingIndex !== -1) {
         // editar
         products[editingIndex] = {
             name: productName,
             code: productCode,
             quantity: productQuantity,
             price: productPrice
         };
         // Restablecer el índice de edición a -1 después de la edición
         editingIndex = -1;
     } else if (existingProductIndex !== -1) {
         alert('¡Ya existe un producto con el mismo nombre!');
         return;
     } else {
         // Agregar nuevo producto
         const product = {
             name: productName,
             code: productCode,
             quantity: productQuantity,
             price: productPrice
         };
         products.push(product);
     }

     // Limpiar el formulario y actualizar lista 
     document.getElementById('productForm').reset();
     displayProducts();
 }

 //  mostrar los productos en la tabla
 function displayProducts() {
     const tableBody = document.getElementById('productTableBody');
     tableBody.innerHTML = '';

     let totalVAT = 0;

     // agregar  las filas a la tabla
     products.forEach((product, index) => {
         const row = tableBody.insertRow();
         row.insertCell(0).textContent = product.name;
         row.insertCell(1).textContent = product.code;
         row.insertCell(2).textContent = product.quantity;
         row.insertCell(3).textContent = product.price.toFixed(2);

         // calculaar  el  IVA y actualizar 
         const subtotalWithoutVAT = product.quantity * product.price;
         const subtotalWithVAT = subtotalWithoutVAT * 1.19;
         totalVAT += subtotalWithVAT;

         row.insertCell(4).textContent = subtotalWithVAT.toFixed(2);

         // Agregar botones de editar y eliminar
         const editButton = document.createElement('button');
         editButton.textContent = 'Editar';
         editButton.onclick = () => editProduct(index);
         editButton.className = 'edit'
         row.insertCell(5).appendChild(editButton);

         const deleteButton = document.createElement('button');
         deleteButton.textContent = 'Eliminar';
         deleteButton.onclick = () => deleteProduct(index);
         deleteButton.className = 'delete'
         row.insertCell(5).appendChild(deleteButton);
     });

     // Mostrar el total de IVA
     const totalVATDiv = document.getElementById('totalVAT');
     totalVATDiv.textContent = `Total IVA del Inventario: ${totalVAT.toFixed(2)}`;

     // mostrar  el resto de estadísticas adicionales
     calculateStatistics();
 }

 // editar un producto
 function editProduct(index) {
     const product = products[index];

     // Llenar el formulario con los datos del producto seleccionado
     document.getElementById('productName').value = product.name;
     document.getElementById('productCode').value = product.code;
     document.getElementById('productQuantity').value = product.quantity;
     document.getElementById('productPrice').value = product.price;

     // Establecer el índice de edición al índice del producto seleccionado
     editingIndex = index;
 }

 // eliminar un producto
 function deleteProduct(index) {
     // Eliminar el producto del arreglo
     products.splice(index, 1);
     // Mostrar la lista actualizada xd
     displayProducts();
 }

 // calcular estadísticas
 function calculateStatistics() {
     // Encontrar el producto de mayor y menor precio 
     //  se utiliza la funcion reduce para tomar todos los elementos de una lista y  aplicar una función a cada uno de ellos
     const maxPriceProduct = products.reduce((max, product) => (max.price > product.price) ? max : product);
     const minPriceProduct = products.reduce((min, product) => (min.price < product.price) ? min : product);

     // mostrar precios en el html
     document.getElementById('maxPriceProduct').textContent = `Producto de mayor precio: ${maxPriceProduct.name} - Precio: ${maxPriceProduct.price.toFixed(2)}`;
     document.getElementById('minPriceProduct').textContent = `Producto de menor precio: ${minPriceProduct.name} - Precio: ${minPriceProduct.price.toFixed(2)}`;
 }

 // otra vez para mostrar los productos 
 displayProducts();
 