const input = document.querySelector("#input");
const productos = JSON.parse(localStorage.getItem("productoGuardadoLS"));
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", filtrar);

function filtrar(e) {
  e.preventDefault();
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

  if (document.getElementById("grillaFunko").innerHTML === "") {
    document.getElementById("grillaFunko").innerHTML += ` 
      <p> No se encontraron productos...</p>`;
  }
}

