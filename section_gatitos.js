// Array de productos
const productos = [
  {nombre: "Acanan Gatito", precio: 1100, img:  "IMAGENES/1.GATITOS/Acanan Gatito.webp"},
  {nombre: "Bravery gatitos", precio: 700, img: "IMAGENES/1.GATITOS/Bravery gatitos.jpg" },
  {nombre: "Fawna", precio: 550, img: "IMAGENES/1.GATITOS/fawna_gatitos.jfif" },
  {nombre: "Hills Science Diet Kitten", precio: 540, img: "IMAGENES/1.GATITOS/Hills Science Diet Kitten.jpg" },
  {nombre: "Royal Canin Alimento humedo", precio: 50, img: "IMAGENES/1.GATITOS/lata_gatito.webp" },
  {nombre: "Nupec Super Premium Gatitos", precio: 700, img: "IMAGENES/1.GATITOS/Nupec Super Premium Gatitos.jpg" },
  {nombre:"NUPEC alimento humedo",precio: 40,img:"IMAGENES/1.GATITOS/nupec_alimento_humedo.webp"},
  {nombre:"Perfect Sense",precio: 350,img:"IMAGENES/1.GATITOS/perfect_sense_gatitos.webp"},
  {nombre:"Purina Pro Plan Kitten",precio: 450,img:"IMAGENES/1.GATITOS/Purina Pro Plan Kitten.jfif"},
  {nombre:"Purina gatitos pollo",precio: 370 ,img:"IMAGENES/1.GATITOS/purina_gatitos.png"},
  {nombre:"Purina One",precio: 540,img:"IMAGENES/1.GATITOS/purina_one.jfif"},
  {nombre:"Royal canin kitten",precio:450,img:"IMAGENES/1.GATITOS/royal_canin_kitten.jpg"}
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
