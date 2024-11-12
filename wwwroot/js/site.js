// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var busqueda = document.getElementById('buscar');
var filtro = document.getElementById("table");

if (filtro) {
    var productos = filtro.getElementsByClassName('product-card');

    // Función para filtrar los productos
    var buscaProductos = function () {
        var texto = busqueda.value.toLowerCase();  // Convertir el texto de búsqueda a minúsculas
        for (var i = 0; i < productos.length; i++) {
            var producto = productos[i];
            var nombreProducto = producto.getElementsByClassName('product-name')[0].innerText.toLowerCase();  // Obtener el nombre del producto

            // Verificar si el nombre del producto contiene el texto de búsqueda
            if (nombreProducto.indexOf(texto) !== -1) {
                producto.style.display = '';  // Mostrar el producto si coincide con la búsqueda
            } else {
                producto.style.display = 'none';  // Ocultar el producto si no coincide
            }
        }
    }

    // Agregar el evento 'keyup' al campo de búsqueda para ejecutar la función de filtrado en tiempo real
    busqueda.addEventListener('keyup', buscaProductos);
} else {
    console.error("No se encontró un elemento con ID 'table'.");
}


