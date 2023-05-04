const pagina = document.querySelector("body");
const selectOpcionesColor = document.querySelector("select");

function cambiarColorTexto(){
    switch (parseInt(selectOpcionesColor.value)) {
        case 1:
            pagina.style.color = "white";
            pagina.style.backgroundColor = "black";
            break;
        case 2:
            pagina.style.color = "violet";
            pagina.style.backgroundColor = "yellow";
            break;
        case 3:
            pagina.style.color = "pink";
            pagina.style.backgroundColor = "red";
            break;        

        default:
            alert = "ERROR";
    }
}