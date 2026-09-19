const body = document.body;
    const form = document.getElementById('form-registro');
    const mensajeEnvio = document.getElementById('mensaje-envio');

    mensajeEnvio.addEventListener("click", () => {
        body.classList.remove('alto-contraste');
    })

    document.getElementById('btn-normal').addEventListener("click", () => {
        body.classList.remove('alto-contraste');
    })

    document.getElementById('btn-contraste').addEventListener("click", () => {
        body.classList.add('alto-contraste');
    })

    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const email = document.getElementById('email');
        const emailValido = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(email.value.trim());

        nombre.setCustomValidity(nombre.value.trim() ? '' : 'Ingrese su nombre.');
        apellido.setCustomValidity(apellido.value.trim() ? '' : 'Ingrese su apellido.');
        email.setCustomValidity(emailValido ? '' : 'Ingrese un email con dominio y extensión, por ejemplo usuario@dominio.com.');

        if(form.checkValidity()) {
            mensajeEnvio.textContent = "Formulario enviado correctamente.";
            mensajeEnvio.classList.add("visible");
        } else {
            form.reportValidity();
            mensajeEnvio.textContent = "Por favor, complete todos los campos correctamente.";            
            mensajeEnvio.classList.add("visible");
        }
    })