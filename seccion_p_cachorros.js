// Array de productos
const productos = [
  { nombre: "Dog chow cachorro", precio: 503, img:  "IMAGENES/3.PERRITOS/dog_chow_cachorro.webp"},
  {nombre:"Eukanuba Cachorro",precio: 1020, img: "IMAGENES/3.PERRITOS/Eukanuba Cachorro.jpg"},
  {nombre:"Hills Science Diet Perrito",precio: 780, img: "IMAGENES/3.PERRITOS/Hills Science Diet Perrito.jpg"},
  {nombre:"Hills puppy pollo",precio: 650, img: "IMAGENES/3.PERRITOS/hills_cachorro.jpg"},
   {nombre:"Nupec alimento balenciado",precio: 450, img: "IMAGENES/3.PERRITOS/nupec_cachorro2.webp"},
   {nombre: "Leche perfect sense", precio: 300, img: "IMAGENES/3.PERRITOS/perfect_sense_leche.webp"},
   {nombre: "Alimento humedo lata Proplan", precio: 100, img: "IMAGENES/3.PERRITOS/puppy_lata_pro_plan.webp"},
   {nombre: "Purina Pro Plan Started", precio: 1150, img: "IMAGENES/3.PERRITOS/Purina Pro Plan started mother baby.jpg"},
   {nombre: "Purina cachorro", precio: 550, img:"IMAGENES/3.PERRITOS/purina_cachorro.png"},
   {nombre:"Royal Canin small puppy",precio:650, img:"IMAGENES/3.PERRITOS/Royal Canin small puppy.jpg"},
   {nombre:"Taste Food Puppy",precio:870, img:"IMAGENES/3.PERRITOS/Taste food Puppy.jpg"},
   {nombre:"Campion Cachorro",precio:300, img:"IMAGENES/3.PERRITOS/camion_cachorro.webp"}

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
