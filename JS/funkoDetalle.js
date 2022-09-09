console.log(window.location.search)
const codigo = new URLSearchParams(window.location.search);
console.log(codigo.get("codigo"))
let listaProductos = JSON.parse(localStorage.getItem("productoGuardadoLS")) || [];

let funkoPop = listaProductos.find((funko) =>{return funko.codigo === codigo.get("codigo")});

let detalle = document.querySelector("#detalleFunko")
detalle.innerHTML = `
<article class="row my-5 border rounded">
<div class="col-12 col-md-8 col-lg-4">
  <img src="${funkoPop.imagen}" class="img-fluid rounded" alt="${funkoPop.nombre}" />
</div>
<div class="col-12 row-cols-md-10 col-lg-8">
<div class="card-body">
  <h3 class="card-title">${funkoPop.nombre}</h3>
  <p class="card-text">
    Descripcion: ${funkoPop.descripcion}
  </p>
  <p>Categoria: ${funkoPop.tipo}</p>
  <p>Precio: ${funkoPop.precio}</p>
  <p>Codigo: ${funkoPop.codigo}</p>
  <p>Stock: ${funkoPop.stock}</p>
  <button class="btn btn-outline-primary my-5"><i class="bi bi-cart2"> Comprar</i></button>
</div>
</div>
</article>`