const form = document.getElementById('contact-form');
var nameForm = document.getElementById('name');
var aviso = document.querySelector('.alert-form');
var mensaje = document.getElementById('message');
var numero = document.getElementById('phone');
var mail = document.getElementById('email');
var submit = document.querySelector('.contact-button');

submit.addEventListener("click", (e) => {
	e.preventDefault();
	validarTexto(nameForm.value, "nombre");
	validarTexto(mensaje.value, "mensaje");
	validarNumeros(numero.value);
	validarContacto();
	e.stopPropagation();
})

function validarTexto(texto, input) {
	var vacio = textoVacio(texto);

	if (vacio) {
		aviso.textContent = "El " + input + " no puede estar vacio";
		return true;
	} else if (texto.length <= 2) {
		aviso.textContent = "El " + input + " no puede ser tan corto";
		return true;
	}
}

function validarNumeros(texto) {
	var tieneNum = tieneNumeros(texto);
	if (!tieneNum) {
		aviso.textContent = "El teléfono de contacto debe contener números";
	}
	if (caracteresEspeciales(texto)) {
		aviso.textContent = "El numero de telefono no puede contener caracteres especiales"
	}

}

function textoVacio(texto) {
	if (texto.length == 0 || texto == null || texto == "" || texto == " ") {
		return true;
	} else {
		return false;
	}
}

function tieneNumeros(texto) {
	if (/[1-9]/.test(texto)) {
		return true;
	}
}

function caracteresEspeciales(texto) {
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	if (format.test(texto)) {
		return true;
	} else {
		return false;
	}
}


function validarContacto() {

	var mailVacio = textoVacio(mail.value);
	var numVacio = textoVacio(numero.value);

	if (mailVacio && numVacio) {
		aviso.textContent = "Por favor ingrese un método de contacto para devolverle su consulta";
	}
}
