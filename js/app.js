//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar')
const formularioEnviar = document.getElementById('enviar-mail');
const botonReset = document.getElementById('resetBtn');


eventListeners();
//event listeners
function eventListeners(){
document.addEventListener('DOMContentLoaded', inicioApp);
email.addEventListener('blur', validarCampo);
mensaje.addEventListener('blur', validarCampo);
asunto.addEventListener('blur', validarCampo);

//boton de enviar en el submit
btnEnviar.addEventListener('click', enviarEmail);
botonReset.addEventListener('click', resetear)
}


//funciones

function inicioApp(){
    //deshabilitar el envio

    btnEnviar.disabled = true;
}


//valida que el campo tenga algo escrito
function validarCampo(){
//se valida la longitud del texto y que no este vacio

validarLongitud(this);

//validar unicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
        if(errores.length === 0) {
             btnEnviar.disabled = false;
        }
    }
}


function validarLongitud(campo){
    if(campo.value.length>0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');

    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}


function validarEmail(campo){

    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');

    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');

    }

}


//cuando enviamos el correo
function enviarEmail(e){
    
    //spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //GIF que se envia email
    const enviado = document.createElement('img');
    enviado.src='img/mail.gif';
    enviado.style.display = 'block';
    
    
    //ocultar spinner y mostrar enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);

        //saco el gif de enviado
        setTimeout(function(){

        enviado.remove();
        formularioEnviar.reset();
        },4000)


    }, 3000);

    e.preventDefault();
}


function resetear(e){
    e.preventDefault();
    formularioEnviar.reset();
    console.log('reseteado');
}
