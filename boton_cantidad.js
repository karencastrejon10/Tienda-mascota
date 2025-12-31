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

