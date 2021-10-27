let arrayColores = [
  'red',
  'blue',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'black',
];

let arrayComponentes = {
  titulo: 'Titulo de la tarjeta',
  descripcion: 'Descripcion de la tarjeta',
  imagen: 'https://picsum.photos/300/400',
};

let seleccionColor = document.getElementById('color');
arrayColores.forEach(function (color) {
  let elemento = document.createElement('option');
  elemento.attributes.value = color;
  elemento.innerHTML = color;
  seleccionColor.appendChild(elemento);
});

let contenedor = document.getElementsByClassName('contenedor');
let elemento = document.createElement('div');
elemento.className = 'tarjeta';
elemento.innerHTML = `<img src="${arrayComponentes.imagen}" alt="" class="imagen"> `;
elemento.innerHTML += `<h2>${arrayComponentes.titulo}</h2>`;
elemento.innerHTML += `<p>${arrayComponentes.descripcion}</p>`;
contenedor[0].appendChild(elemento);

let opciones = document.querySelector('#color');
opciones.addEventListener('change', function () {
  elemento.style.backgroundColor = seleccionColor.value;
});
