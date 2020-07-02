// Variables 
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');





// event Listeners

eventListeners();

function eventListeners() {
    // Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Boton de enviar
    formularioEnviar.addEventListener('submit', enviarEmail);

}


// funciones

function inicioApp() {
    // deshabilitar el envio
     btnEnviar.disabled = true;
}

// valida que el campo tiene algo escrito
function validarCampo() {
    
    // Se valida la longitud del texto que no este vacio 
    validarLongitud(this);

    // Validar unicamente el 'email'
    if(this.type === 'email') {
        validarEmail(this);
    }
     


let errores = document.querySelectorAll('.error')

if(email.value !== '' && asunto.value !== '' &&  mensaje.value !== '' ) {
    if(errores.length === 0) {
        btnEnviar.disabled = false;
    }
}
    
}
// Cuando se envia el correo
function enviarEmail(e) {
    console.log('Mail Enviado');

    e.preventDefault();
}

// Varifica la longitud del texto en los campos
function validarLongitud (campo) {
    console.log(campo.value.length);

    if(campo.value.length > 0 ) {
        campo.style.broderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.broderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// validar el email
function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1 ) {
        campo.style.broderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.broderBottomColor = 'red';
        campo.classList.add('error');
    }
}