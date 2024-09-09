document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Gracias, ${name}. Hemos recibido tu mensaje y nos pondremos en contacto contigo a través de ${email}.`);
});
