//SIRVE PARA QUE PODAMOS DARL CLIC A CADA NOMBRE LO QUE ES PERROS, GATOS Y AVES 
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Quitar clase active de todo
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // Activar el botón clickeado
        btn.classList.add("active");

        // Activar el contenido correspondiente
        const tabID = btn.dataset.tab;
        document.getElementById(tabID).classList.add("active");
    });
});
