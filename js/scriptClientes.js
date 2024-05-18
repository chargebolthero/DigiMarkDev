// Seleccionar todos los enlaces de cliente
var clienteLinks = document.querySelectorAll('.cliente-link');

// Recorrer cada enlace y agregar un evento de clic
clienteLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar que el enlace recargue la página

        var clienteURL = this.getAttribute('data-cliente'); // Obtener la URL del cliente

        // Realizar una solicitud de AJAX para cargar el contenido del cliente
        var xhr = new XMLHttpRequest();
        xhr.open('GET', clienteURL, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                // Éxito en la solicitud, actualizar el contenido con la respuesta
                document.getElementById('contenido').innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el contenido del cliente.');
            }
        };
        xhr.onerror = function() {
            console.error('Error de red al intentar cargar el contenido del cliente.');
        };
        xhr.send();
    });
});

// funciones botones 
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");

    // Set the URL to redirect to
    var url = "index.html";

    // Add click event to the button
    button.addEventListener("click", function() {
        window.location.href = url;
    });
});

