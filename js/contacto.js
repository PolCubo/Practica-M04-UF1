document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("confirmation-message").style.display = "none";
    document.getElementById("error-message").style.display = "none";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    document.getElementById("confirmation-message").style.display = "block";
    
    document.getElementById("contact-form").reset();
});
