let listaProductos = JSON.parse(localStorage.getItem("productoGuardadoLS")) || [];

listaProductos.map((funko)=>{crearCards(funko)});

function crearCards(funko){
    let cards = document.querySelector("#grillaFunko");
    cards.innerHTML += `
    <div class="card col-12 col-md-5 col-lg-2 cardSize">
    <img src="${funko.imagen}" class="img-fluid" alt="${funko.nombre}">
    <div class="card-body">
      <h5 class="card-title">${funko.nombre}</h5>
      <p class="card-text">${funko.precio}</p>
        <button type="button" class="btn btn-outline-primary" onclick="detalleFunko('${funko.codigo}')">Detalles</button>
      <button type="button" class="btn btn-outline-primary">Comprar</button>
    </div>
  </div>`
}

function detalleFunko(codigo){
    window.location.href = window.location.origin = "/page/detalle.html?codigo="+codigo;
}