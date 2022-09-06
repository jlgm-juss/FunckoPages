// Inicializacion de variables
const modalFormProductos = new bootstrap.Modal(
    document.querySelector("#modalForm"));
const btnAgregarProducto = document.getElementById("btnAgregarProducto");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let tipo = document.getElementById("tipo");
let formProducto = document.getElementById("formProducto");


// Events
btnAgregarProducto.addEventListener("click",()=>{mostrarForm(codigo)});




// Funciones

function mostrarForm(){
    modalFormProductos.show();
    codigo.value = uuidv4();
}