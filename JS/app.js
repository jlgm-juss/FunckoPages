import Producto from "./classProducto.js";

// Inicializacion de variables
let listaProductos =
  JSON.parse(localStorage.getItem("productoGuardadoLS")) || [];
const modalFormProductos = new bootstrap.Modal(
  document.querySelector("#modalAgregarProducto")
);
const btnAgregarProducto = document.getElementById("btnAgregarProducto");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let tipo = document.getElementById("tipo");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");
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
    precio.value,
    stock.value,
    imagen.value,
    tipo.value
  );
  console.log(nuevoProducto);
  listaProductos.push(nuevoProducto);
  guardarLS();
  limpiarForm();
  console.log(listaProductos);
  Swal.fire(
    "Producto Agregado",
    "El producto se agrego correctamente",
    "success"
  );
  actualizarTabla();
  modalFormProductos.hide();
}

function limpiarForm() {
  formProducto.reset();
  nombre.className = "form-control";
  descripcion.className = "form-control";
  precio.className = "form-control";
  stock.className = "form-control";
  imagen.className = "form-control";
  tipo.className = "form-control";
}

function guardarLS() {
  localStorage.setItem("productoGuardadoLS", JSON.stringify(listaProductos));
}
cargaInicial();
function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((productos) => {
      crearFila(productos);
    });
  }
}

function crearFila(productos) {
  console.log(productos);
  let tablaProducto = document.querySelector("#tablaProducto");
  console.log(tablaProducto);
  tablaProducto.innerHTML += ` <tr>
<th
  scope="row"
  class="text-truncate"
  style="max-width: 150px"
>
  ${productos.codigo}
</th>
<td>${productos.nombre}</td>
<td class="text-truncate" style="max-width: 150px">
${productos.descripcion}
</td>
<td class="text-truncate" style="max-width: 150px">
${productos.precio}
</td>
<td>${productos.stock}</td>
<td>${productos.imagen}</td>
<td>${productos.tipo}</td>
<td>
<button class="btn">
<i class="bi bi-pencil-square text-warning fs-1" ></i>
</button>
<button class="btn">
<i class="bi bi-clipboard-x-fill text-danger fs-1" onclick="borrarProducto('${productos.codigo}')"></i>
</button>
</td>
</tr>`;
}

function actualizarTabla() {
  let tablaProducto = document.querySelector("#tablaProducto");
  tablaProducto.innerHTML = "";
  cargaInicial();
}

window.borrarProducto = function (codigo) {
  Swal.fire({
    title: "Eliminar Pelicula",
    text: "Si eliminas la pelicula no podras volver a recuperar",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(codigo);
      let copiaListaProductos = listaProductos.filter((producto) => {
        return producto.codigo != codigo;
      });
      console.log(copiaListaProductos);
      listaProductos = copiaListaProductos;
      guardarLS();
      actualizarTabla();
      Swal.fire(
        "Eliminada!",
        "Has eliminado con exito esta pelicula",
        "success"
      );
    }
  });
};
