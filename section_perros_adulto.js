// Array de productos
const productos = [
  { nombre: "Beneful", precio: 503, img:  "IMAGENES/4.PERROS/Beneful.jpg" },
  { nombre: "Dog Chow", precio: 595, img: "IMAGENES/4.PERROS/DogChow.jpg" },
  { nombre: "Nupec Perro Senior", precio: 500, img: "IMAGENES/4.PERROS/Nupec Perro.jpg" },
  { nombre: "Nupec razas pequeñas", precio: 650, img: "IMAGENES/4.PERROS/nupec2.jpg" },
  { nombre: "Orije", precio: 1775, img: "IMAGENES/4.PERROS/Orijen Perro2.jpg" },
  { nombre: "Purina ONE razas pequeñas", precio: 700, img: "IMAGENES/4.PERROS/purina_one1.jpg" },
  {nombre:"Purina ONE Adultos",precio: 300,img:"IMAGENES/4.PERROS/purina_one2.jpg"},
  {nombre:"Purina ONE Senior",precio: 450,img:"IMAGENES/4.PERROS/purina_one3.jpg"},
  {nombre:"Royal Canin Perro Mediano",precio: 750,img:"IMAGENES/4.PERROS/Royal Canin Perro.jpg"},
  {nombre:"Royal Canin Adulto",precio: 750,img:"IMAGENES/4.PERROS/Royal Canin Perro2.jpg"},
  {nombre:"Taste Food Perro Carne",precio: 1750,img:"IMAGENES/4.PERROS/Taste Food Perro1.webp"},
  {nombre:"Taste Food Perro Pescado",precio:1200,img:"IMAGENES/4.PERROS/Taste Food Perro3.jpg"}
];

// Seleccionamos el contenedor
const grid = document.getElementById("productos-grid");

// Creamos dinámicamente cada producto
productos.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML = `
   <a href="#"><img src="${producto.img}" alt="${producto.nombre}"></a>
    <a href="#"><h3>${producto.nombre}</h3></a>
    <p>Desde $${producto.precio} MXN</p>
    <button><a href="#">Comprar</a></button>
  `;

  grid.appendChild(div);
});
