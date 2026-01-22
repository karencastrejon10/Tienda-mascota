//Este es un array que va tener los datos que se van a mostrar en pantalla
const productos = [
  {
    id: 0,
    img: "IMAGENES/4.PERROS/Beneful.jpg",
    nombre: "Beneful la felicidad del Ahora",
    descripcion: "Salmon, carne, zanahoria y lo mejor sin conservadores",
    deta: "ADULTO SALUD RADIANTE",
    //Este es un array que va a tener los datos de tamaño y kilos que van a hacer que los botones cambien
    //de tamaño y precio
    opciones: [
      { tamano: "5 kg", precio: 530 },
      { tamano: "10 kg", precio: 1020 },
      { tamano: "15 kg", precio: 1450 }
    ]
  },
  {
    id: 1,
    img: "IMAGENES/4.PERROS/DogChow.jpg",
    nombre: "Dog Chow Adulto",
    descripcion: "Proteína de alta calidad para perros adultos",
    deta: "ADULTO",
    opciones: [
      { tamano: "4 kg", precio: 350 },
      { tamano: "8 kg", precio: 650 },
      { tamano: "15 kg", precio: 1000 }
    ]
  }
];


// Leer el ID de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

//  Buscar el producto correcto
const producto = productos.find(p => p.id === id);

//  Mostrarlo en pantalla
document.getElementById("nombre-producto").textContent = producto.nombre;
document.getElementById("descripcion-producto").textContent = producto.descripcion;
document.getElementById("descripcion-deta").textContent = producto.deta;
document.getElementById("imagen-producto").src = producto.img;
document.getElementById("precio").textContent = `$${producto.opciones[0].precio}.00 MXN`;
document.getElementById("tamano").textContent = producto.opciones[0].tamano;
//Esta seccion creea los botones para dar tañamo y precio, al darle clic al boton te va a mostrar lo que cuesta y el tamaño
const contenedor = document.getElementById("botones");

producto.opciones.forEach((opcion, index) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  if (index === 0) btn.classList.add("activo");

  btn.textContent = opcion.tamano;

  btn.addEventListener("click", () => {
    document.querySelectorAll(".btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");

    document.getElementById("precio").textContent = `$${opcion.precio}.00 MXN`;
    document.getElementById("tamano").textContent = opcion.tamano;
  });

  contenedor.appendChild(btn);
});

/*HACE REFERENCIA AL BOTON DE INCREMENTAR O SEA QUE ESTA SECCION HARA QUE PUEDAS ESCOGER CUANTOS ARTICULOS COMPRAR*/
  const minusBtn = document.getElementById("minus");
  const plusBtn = document.getElementById("plus");
  const quantityInput = document.getElementById("quantity");

  minusBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
  });


