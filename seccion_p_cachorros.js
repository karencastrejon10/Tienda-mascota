// Array de productos
const productos = [
  { nombre: "Dog chow cachorro", precio: 503, img:  "IMAGENES/3.PERRITOS/dog_chow_cachorro.webp"},
  {nombre:"Eukanuba Cachorro",precio: 1020, img: "IMAGENES/3.PERRITOS/Eukanuba Cachorro.jpg"},
  {nombre:"Hills Science Diet Perrito",precio: 780, img: "IMAGENES/3.PERRITOS/Hills Science Diet Perrito.jpg"},
  {nombre:"Hills puppy pollo",precio: 650, img: "IMAGENES/3.PERRITOS/hills_cachorro.jpg"},
   {nombre:"Nupec alimento balenciado",precio: 450, img: "IMAGENES/3.PERRITOS/nupec_cachorro2.webp"},
  

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
