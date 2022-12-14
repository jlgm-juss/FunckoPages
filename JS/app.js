import Producto from "./classProducto.js";
import {
  validarDescripcion,
  validarGenero,
  validarImagen,
  validarNombre,
  validarPrecio,
  validarStock,
} from "./helpers.js";

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
let funkoNuevo = true;

// Events
btnAgregarProducto.addEventListener("click", () => {
  mostrarForm(codigo);
});
formProducto.addEventListener("submit", crearProducto);
nombre.addEventListener("blur", () => {
  validarNombre(nombre);
});
descripcion.addEventListener("blur", () => {
  validarDescripcion(descripcion);
});
imagen.addEventListener("blur", () => {
  validarImagen(imagen);
});
tipo.addEventListener("blur", () => {
  validarGenero(tipo);
});
precio.addEventListener("blur", () => {
  validarPrecio(precio);
});
stock.addEventListener("blur", () => {
  validarStock(stock);
});

// Funciones

function mostrarForm() {
  funkoNuevo = true;
  limpiarForm();
  modalFormProductos.show();
  codigo.value = uuidv4();
}

function crearProducto(e) {
  e.preventDefault();
  if (funkoNuevo == true) {
    generarFunko();
  } else {
    actuzalizarFunko();
  }
}

function generarFunko() {
  if (
    validarNombre(nombre) &&
    validarDescripcion(descripcion) &&
    validarImagen(imagen) &&
    validarGenero(tipo) &&
    validarPrecio(precio) &&
    validarStock(stock)
  ) {
    const nuevoProducto = new Producto(
      codigo.value,
      nombre.value,
      descripcion.value,
      precio.value,
      stock.value,
      imagen.value,
      tipo.value
    );

    listaProductos.push(nuevoProducto);
    guardarLS();
    limpiarForm();
    crearFila(nuevoProducto);
    Swal.fire(
      "Producto Agregado",
      "El producto se agrego correctamente",
      "success"
    );
    actualizarTabla();
    modalFormProductos.hide();
  } else {
    Swal.fire("Ocurrio un error");
  }
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
  let tablaProducto = document.querySelector("#tablaProducto");
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
<td class="text-truncate" style="max-width: 150px">${productos.imagen}</td>
<td>${productos.tipo}</td>
<td>
<button class="btn">
<i class="bi bi-pencil-square text-warning fs-1" onclick="editarFunko('${productos.codigo}')" ></i>
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
      let copiaListaProductos = listaProductos.filter((producto) => {
        return producto.codigo != codigo;
      });
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

window.editarFunko = function (producto) {
  funkoNuevo = false;

  modalFormProductos.show();

  let funkoSeleccionado = listaProductos.find(
    (funko) => funko.codigo === producto
  );

  codigo.value = funkoSeleccionado.codigo;
  nombre.value = funkoSeleccionado.nombre;
  descripcion.value = funkoSeleccionado.descripcion;
  imagen.value = funkoSeleccionado.imagen;
  tipo.value = funkoSeleccionado.tipo;
  precio.value = funkoSeleccionado.precio;
  stock.value = funkoSeleccionado.stock;
};

function actuzalizarFunko() {
  let posicionFunko = listaProductos.findIndex(
    (posicion) => posicion.codigo == codigo.value
  );

  listaProductos[posicionFunko].nombre = nombre.value;
  listaProductos[posicionFunko].descripcion = descripcion.value;
  listaProductos[posicionFunko].imagen = imagen.value;
  listaProductos[posicionFunko].tipo = tipo.value;
  listaProductos[posicionFunko].precio = precio.value;
  listaProductos[posicionFunko].stock = stock.value;

  guardarLS();

  actualizarTabla();

  modalFormProductos.hide();

  limpiarForm();
}
