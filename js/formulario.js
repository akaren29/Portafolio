const formulario = document.querySelector('#formulario');
const inputs = document.querySelectorAll('.input-padron');


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    mensaje: /[A-Za-z0-9 \[\]^$.|?*+()¡!¿=\&-_¨]{1,300}$/
}

const campos = {
    nombre: false,
    email: false,
    telefono: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email')
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono')
        break;
        case "mensaje":
            validarCampo(expresiones.mensaje, e.target, 'mensaje')
        break;
    }
}
const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo-${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
      }else{
        document.getElementById(`grupo-${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo-${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
      }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.nombre && campos.email && campos.telefono && campos.mensaje){
         formulario.reset();
         document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
         setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
         }, 3000);

         document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
             icono.classList.remove('formulario__grupo-correcto')
         })
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
         }, 3000);
    }
})