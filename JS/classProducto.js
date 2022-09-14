export default class Producto {
  constructor(codigo, nombre, descripcion, precio, stock, imagen, tipo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
    this.tipo = tipo;
  }

  set cambiarNombre(nuevoNombre){
    this.nombre = nuevoNombre
  }
  set cambiarDescri(nuevaDescri){
    this.descripcion = nuevaDescri
  }
  set cambiarPrecio(nuevoPrecio){
    this.precio = nuevoPrecio
  }
  set cambiarStock(nuevoStock){
    this.stock = nuevoStock
  }
  set cambiarImagen(nuevaImagen){
    this.imagen = nuevaImagen
  }
  set cambiarTipo(nuevoTipo){
    this.tipo = nuevoTipo
  }

  get mostrarCodigo(){
    return this.codigo
  }
  get mostrarNombre(){
    return this.nombre
  }
  get mostrarDescripcion(){
    return this.descripcion
  }
  get mostrarPrecio(){
    return this.precio
  }
  get mostrarStock(){
    return this.stock
  }
  get mostrarImagen(){
    return this.imagen
  }
  get mostrarTipo(){
    return this.tipo
  }
}
