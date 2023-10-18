/*Hacer un formulario que capture la siguiente información del usuario:
Nombre, Apellido, Fecha de nacimiento, email, género y foto (link a una imagen suya). El mismo deberá estar validado.

Al presionar un botón (para enviar los datos) dicha información deberá guardarse en localStorage como un objeto y al mismo tiempo deberá mostrar en pantalla una card con toda la información del usuario (incluyendo su foto)*/

let arrayUser = JSON.parse(localStorage.getItem('user')) || [];



const formulario = (e) => {
  e.preventDefault();

  const nombre = document.querySelector('#inputNombre').value;
  const apellido = document.querySelector('#inputApellido').value;
  const fechaDeNacimiento = document.querySelector('#inputFechaDeNac').value;
  const email = document.querySelector('#inputEmail').value;
  const genero = document.querySelector('#inputGenero').value;
  const foto = document.querySelector('#inputFoto').value;
  
  const user = {
    nombre,
    apellido,
    fechaDeNacimiento,
    email,
    genero,
    foto
  };

  arrayUser.push(user);

  const personaJson = JSON.stringify(arrayUser);
  localStorage.setItem('user', personaJson);

  const printCard = () => {
    const cards = document.getElementById('card');
    cards.classList = 'container';
    cards.innerHTML = '';
    arrayUser.map((usuario, i) => {
      const card = document.createElement('div');
      card.className = 'user-card'
      card.innerHTML = `
      <div class="card mt-3" style="width: 18rem;">
        <img src="${usuario.foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${usuario.nombre} ${usuario.apellido}</h5>
          <p class="card-text">${usuario.email}</p>
          <p class="card-text">${usuario.genero}</p>
          <p class="card-text">${usuario.fechaDeNacimiento}</p>
        </div>
      </div>
      `;
      cards.appendChild(card);
    })
  };
  printCard()
};




document.getElementById('formDatos').addEventListener('submit', formulario);

