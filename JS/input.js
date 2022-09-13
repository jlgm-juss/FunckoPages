//parametro de busqueda segun find
// const productos1 = [{
//     nombre: 'jason vorgees',
//     valor: 10000
//   },
//   {
//     nombre: 'mark',
//     valor: 13000
//   },
//   {
//     nombre: 'batman',
//     valor: 12000
//   },
//   {
//     nombre: 'superman',
//     valor: 15000
//   },
// ]
const input = document.querySelector('#input')

const productos = JSON.parse(localStorage.getItem("productoGuardadoLS"));
//console.log("productos:", productos);
const formulario = document.querySelector('#formulario');
//const boton = document.querySelector('#boton');
formulario.addEventListener('submit', filtrar)

function filtrar(e) {
    e.preventDefault()
  const texto = input.value.toLowerCase();

  //Vacia el elemento "article" antes de mostrar los resultados.
  document.getElementById("grillaFunko").innerHTML = "";

  for (let producto of productos) {
    let nombre = producto.nombre.toLocaleLowerCase();
    if (nombre.includes(texto)) {

      //Agrega el producto si hay coincidencias en la busqueda.
      document.getElementById("grillaFunko").innerHTML += `
        <div class="card col-12 col-md-5 col-lg-2 cardSize">
        <img src="${producto.imagen}" class="img-fluid" alt="FunkoPop">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <a href="../page/detalle.html?codigo=${producto.codigo}">
            <button type="button" class="btn btn-outline-primary">Detalle</button></a>
          <button type="button" class="btn btn-outline-primary">Comprar</button>
        </div>
      </div>`;
    }
  }

  if (document.getElementById("grillaFunko").innerHTML === '') {
    document.getElementById("grillaFunko").innerHTML += ` 
      <p> No se encontraron productos...</p>`
  }
}
// boton.addEventListener('click', filtrar);
// boton.addEventListener('keyup', filtrar);
// filtrar();

// hice la busqueda de listado de productos y tabla.

// const filtrarTablaProducto = () => {
//   const texto = formulario.value.toLowerCase();

//   //Vacia el elemento "article" antes de mostrar los resultados.
//   document.getElementById("tablaProducto").innerHTML = "";

//   for (let producto of productos) {
//     let nombre = producto.nombre.toLocaleLowerCase();
//     if (nombre.includes(texto)) {
//       //Agrega el producto si hay coincidencias en la busqueda.
//       crearFila(producto);
//     }
//   }

//   if (document.getElementById("tablaProducto").innerHTML === '') {
//     document.getElementById("tablaProducto").innerHTML += ` 
//     <tr>
//     <th
//       scope="row"
//       class="text-truncate text-center"
//       style="max-width: 150px"
//       colspan="8"
//     >
//       no se encontraron productos
//     </th>
    
//     </tr>`
//   }
// }

//funcion para buscar local storage.
function crearFila(productos) {
  console.log(productos);
  let tablaProducto = document.querySelector("#tablaProducto");
  console.log(tablaProducto);
  tablaProducto.innerHTML += `<tr>
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
<i class="bi bi-pencil-square text-warning fs-1" onclick="editarFunko('${productos.codigo}')" ></i>
</button>
<button class="btn">
<i class="bi bi-clipboard-x-fill text-danger fs-1" onclick="borrarProducto('${productos.codigo}')"></i>
</button>
</td>
</tr>`;
};