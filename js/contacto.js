document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Ocultar mensajes previos
    document.getElementById("confirmation-message").style.display = "none";
    document.getElementById("error-message").style.display = "none";

    // Validación de campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return; // Detiene el envío si algún campo está vacío
    }

    // Simular envío exitoso (en producción, aquí iría el código real para enviar el formulario)
    // Mostrar mensaje de confirmación en vez de error
    document.getElementById("confirmation-message").style.display = "block";
    
    // Resetear el formulario después de envío exitoso
    document.getElementById("contact-form").reset();
});