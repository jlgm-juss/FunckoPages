import {validarNombre, validarContraseña  } from "./helpers.js";

class Usuario {
    constructor(usuario, pass){
        this.usuario = usuario,
        this.pass = pass
    }
}

let usuario = document.getElementById('usuario')
let pass = document.getElementById('pass')
let ingresar = document.getElementById('ingresar')
let formLogin = document.getElementById('formLog')

function DirigirAdmin(){
    if(usuario == 'AdminFunko' && pass == 'Funko989'){
        window.location.href = './page/adminstrador.html'
    }
}

formLogin.addEventListener("submit", crearAdmin);

function crearAdmin(e) {
    e.preventDefault();
    location = 'administrador.html';
    const nuevoUsuario = new Usuario(
      usuario.value,
      pass.value,
    );
  }
  
  usuario.addEventListener('blur',()=>{validarNombre(precio)});
  pass.addEventListener('blur', ()=>{validarContraseña(stock)});