// Array de productos
const productos = [
  {nombre: "Acanan Gato Senior", precio: 1000, img:  "IMAGENES/2.GATOS/Acana Gato.jpg" },
  {nombre: "Tier Comida humeda pescado", precio: 35, img: "IMAGENES/2.GATOS/comida_humeda_pescado.jfif"},
  {nombre: "Gran Cat", precio: 250, img: "IMAGENES/2.GATOS/gran_cat.jfif" },
  {nombre: "Hills Science Diet Gato", precio: 750, img: "IMAGENES/2.GATOS/Hills Science Diet Gato.jpg" },
  {nombre: "Hills control caída pelo", precio: 780, img: "IMAGENES/2.GATOS/hills_control_caida.jfif"},
  {nombre: "Mixi croquetas", precio: 300, img: "IMAGENES/2.GATOS/mixi_croquetas.jpg"},
  {nombre:"Orijen gato",precio: 1100,img:"IMAGENES/2.GATOS/Orijen gato.jfif"},
  {nombre:"Perfect Sense",precio: 350,img:"IMAGENES/2.GATOS/perfect_sense.webp"},
  {nombre:"Purina Pro Plan Urinario",precio: 30,img:"IMAGENES/2.GATOS/pro_plan_urinario.webp"},
  {nombre:"Proplan Gato",precio: 600 ,img:"IMAGENES/2.GATOS/proplan_gato.webp"},
  {nombre:"Purina Gatos esterilizados",precio: 710,img:"IMAGENES/2.GATOS/purina_gatos_esterilizados.png"},
  {nombre:"Royal canin",precio:550,img:"IMAGENES/2.GATOS/Royal Canin Gato.jpg"}
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
