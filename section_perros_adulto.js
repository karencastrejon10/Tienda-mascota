// Array de productos
const productos = [
  { id: 0, nombre: "Beneful", precio: 503, img:  "IMAGENES/4.PERROS/Beneful.jpg" },
  { id: 1, nombre: "Dog Chow", precio: 595, img: "IMAGENES/4.PERROS/DogChow.jpg" },
  { id: 2, nombre: "Nupec Perro Senior", precio: 500, img: "IMAGENES/4.PERROS/Nupec Perro.jpg" },
  { id: 3, nombre: "Nupec razas pequeñas", precio: 650, img: "IMAGENES/4.PERROS/nupec2.jpg" },
  { id: 4, nombre: "Orije", precio: 1775, img: "IMAGENES/4.PERROS/Orijen Perro2.jpg" },
  { id: 5, nombre: "Purina ONE razas pequeñas", precio: 700, img: "IMAGENES/4.PERROS/purina_one1.jpg" },
  { id: 6, nombre:"Purina ONE Adultos",precio: 300,img:"IMAGENES/4.PERROS/purina_one2.jpg"},
  { id: 7, nombre:"Purina ONE Senior",precio: 450,img:"IMAGENES/4.PERROS/purina_one3.jpg"},
  { id: 8, nombre:"Royal Canin Perro Mediano",precio: 750,img:"IMAGENES/4.PERROS/Royal Canin Perro.jpg"},
  { id: 9, nombre:"Royal Canin Adulto",precio: 750,img:"IMAGENES/4.PERROS/Royal Canin Perro2.jpg"},
  { id: 10, nombre:"Taste Food Perro Carne",precio: 1750,img:"IMAGENES/4.PERROS/Taste Food Perro1.webp"},
  { id: 11, nombre:"Taste Food Perro Pescado",precio:1200,img:"IMAGENES/4.PERROS/Taste Food Perro3.jpg"}
];

// Seleccionamos el contenedor
const grid = document.getElementById("productos-grid");

// Creamos dinámicamente cada producto
productos.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML = `
   <a href="p_adulto1.html?id=${producto.id}"><img src="${producto.img}" alt="${producto.nombre}"></a>
    <a href="p_adulto1.html?id=${producto.id}"><h3>${producto.nombre}</h3></a>
    <p>Desde $${producto.precio} MXN</p>
    <button><a href="p_adulto1.html?id=${producto.id}">Comprar</a></button>
  `;

  grid.appendChild(div);
});
