const botones = document.querySelectorAll('.btn');
const precio = document.getElementById('precio');
const tamano = document.getElementById('tamano');

botones.forEach(boton => {
  boton.addEventListener('click', () => {

    // Quitar clase activo a todos
    botones.forEach(b => b.classList.remove('activo'));

    // Agregar activo al botón clickeado
    boton.classList.add('activo');

    // Cambiar precio y tamaño
    const nuevoPrecio = boton.dataset.precio;
    const nuevoTamano = boton.dataset.tamano;

    precio.textContent = `$${Number(nuevoPrecio).toLocaleString()}.00 MXN`;
    tamano.textContent = nuevoTamano;
  });
});
