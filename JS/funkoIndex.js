let listaProductos = JSON.parse(localStorage.getItem("productoGuardadoLS")) || [];

listaProductos.map((funko)=>{crearCards(funko)});

function crearCards(funko){
    let cards = document.querySelector("#grillaFunko");
    cards.innerHTML += `
    <div class="card col-12 col-md-5 col-lg-2 cardSize">
      <div>
        <img src="${funko.imagen}" class="w-100 card-img-top" alt="${funko.nombre}">
      </div>
      <div class="">
        <div class="card-body">
          <h5 class="card-title">${funko.nombre}</h5>
          <p class="card-text">${funko.precio}</p>
          <button type="button" class="btn btn-outline-primary" onclick="detalleFunko('${funko.codigo}')">Detalles</button>
          <a href="./page/error404.html" class="btn btn-outline-primary">Comprar</a>
        </div>
     </div>
    </div>`
}

function detalleFunko(codigo){
    window.location.href = window.location.origin = "/page/detalle.html?codigo="+codigo;
}