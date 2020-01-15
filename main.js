// 1. Recorrer el array de usuarios y por cada usuario
// crear una card con sus datos

// 2. Manejar sistema de likes para que cada clic en cada
// foto de usuario le de likes solo a ese usuario.

const usuarios = [
  {
    nombre: 'Pepita Gomez',
    descripcion: 'Maquetadora',
    foto: 'foto.jpeg'
  },
  {
    nombre: 'Mariquita Thompson',
    descripcion: 'Cantante de himno',
    foto: 'foto.jpeg'
  },
  {
    nombre: 'Pancracia Williams',
    descripcion: 'Tenista',
    foto: 'foto.jpeg'
  },
  {
    nombre: 'Trufa Rodriguez Larreta',
    descripcion: 'Cantante de feliz cumpleanos',
    foto: 'foto.jpeg'
  }
];

const main = document.getElementById('main');

let nombre = '';
for (let i = 0; i < usuarios.length; i++) {
  nombre =
    nombre +
    `
  <article class="card">
    <div class="imagen">
      <img src="${usuarios[i].foto}">
    </div>
    <div class="informacion">
      <h2>${usuarios[i].nombre}</h2>
      <p id="descripcion">${usuarios[i].descripcion}</p>
      <p><i class="fa fa-heart"></i> <span id="likes">0</span> likes</p>
    </div>
  </article>
  `;
}

main.innerHTML = nombre;

const imagenes = document.getElementsByClassName('imagen');
const corazones = document.querySelectorAll('.fa.fa-heart');
const likes = document.querySelectorAll('#likes');

for (let i = 0; i < usuarios.length; i++) {
  imagenes[i].onclick = () => {
    corazones[i].classList.add('rojo');
    let cantidadDeLikes = Number(likes[i].textContent);
    cantidadDeLikes++;
    likes[i].textContent = cantidadDeLikes;
  };

  corazones[i].onclick = () => {
    if (likes[i].textContent > '0') {
      let cantidadDeLikes = Number(likes[i].textContent);
      cantidadDeLikes--;
      likes[i].textContent = cantidadDeLikes;
    }
    if (likes[i].textContent === '0') {
      corazones[i].classList.remove('rojo');
    } else {
      corazones[i].classList.add('rojo');
    }
  };
}


