import Producto from "./classProducto.js";

// Inicializacion de variables
let listaProductos = JSON.parse(localStorage.getItem("productoGuardadoLS")) ||[];
const modalFormProductos = new bootstrap.Modal(
  document.querySelector("#modalAgregarProducto")
);
const btnAgregarProducto = document.getElementById("btnAgregarProducto");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let tipo = document.getElementById("tipo");
let formProducto = document.getElementById("formProducto");

// Events
btnAgregarProducto.addEventListener("click", () => {
  mostrarForm(codigo);
});
formProducto.addEventListener("submit", crearProducto);

// Funciones

function mostrarForm() {
  modalFormProductos.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();
  console.log("vamo a crea un producto");
  const nuevoProducto = new Producto(
    codigo.value,
    nombre.value,
    descripcion.value,
    imagen.value,
    tipo.value
  );
  console.log(nuevoProducto);
  listaProductos.push(nuevoProducto);
  guardarLS();
  limpiarForm();
  console.log(listaProductos);
  modalFormProductos.hide();
}

function limpiarForm() {
    formProducto.reset();
    nombre.className = "form-control";
    descripcion.className = "form-control";
    imagen.className = "form-control";
    tipo.className = "form-control";
  }

  function guardarLS(){
    localStorage.setItem("productoGuardadoLS",JSON.stringify(listaProductos));
  }