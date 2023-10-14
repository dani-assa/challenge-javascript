/*Hacer un formulario que capture la siguiente información del usuario:
Nombre, Apellido, Fecha de nacimiento, email, género y foto (link a una imagen suya). El mismo deberá estar validado.

Al presionar un botón (para enviar los datos) dicha información deberá guardarse en localStorage como un objeto y al mismo tiempo deberá mostrar en pantalla una card con toda la información del usuario (incluyendo su foto)*/


class Persona {
  constructor (nombre, apellido, FechaDeNacimiento, email, genero, foto) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.FechaDeNacimiento = FechaDeNacimiento;
    this.email = email;
    this.genero = genero;
    this.foto = foto
  }
};

let nombre = document.querySelector('#inputNombre');
let apellido = document.querySelector('#inputApellido');
let fechaDeNacimiento = document.querySelector('#inputFechaDeNac');
let email = document.querySelector('#inputEmail');
let genero = document.querySelector('#inputGenero');
let foto = document.querySelector('#inputFoto');

const formulario = (e) => {
  e.preventDefault();
  const nuevaPersona = new Persona(
    nombre.value,
    apellido.value,
    fechaDeNacimiento.value,
    email.value,
    genero.value,
    foto.value
  );


const card = document.querySelector('#card');
card.className = "container"
card.innerHTML = `
<div class="card mt-3" style="width: 18rem;">
  <img src="${foto.value}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${nombre.value} ${apellido.value}</h5>
    <p class="card-text">${email.value}</p>
    <p class="card-text">${genero.value}</p>
    <p class="card-text">${fechaDeNacimiento.value}</p>
  </div>
</div>
`
const personaJson = JSON.stringify(nuevaPersona);
localStorage.setItem('user', personaJson);
const personaObjeto = JSON.parse(personaJson);
console.log(personaObjeto);
};

document.querySelector('#formDatos').addEventListener('submit', formulario);

