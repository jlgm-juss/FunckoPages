// function obtenerListaUsuarios(){
//     let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

//     if(listaUsuarios = null){
//         listaUsuarios=
//         [
//         //Usuario, contraseña
//         ['adminsfunko', 'funk77']
//         ]
//     }
//     return listaUsuarios;
// }
// function validarCredenciales(pUsuario, pContrasena){
//     let listaUsuarios = obtenerListaUsuarios();
//     let bAcceso = false;

//     for(let i=0; i < listaUsuarios.length; i++){
//         if(pUsuario == listaUsuarios[i][0] && pContrasena == listaUsuarios[i][1]){
//             bAcceso = true;
//             sessionStorage.setItem('usuarioActivo', listaUsuarios[i][0] + '')
//         }
//     }
//     return bAcceso;
// }
   
   
   
   
   
   
   
   //PARA CREAR USUARIOS SIN PERMISOS ESPECIALES
   // const usuario = document.getElementById('usuario')
    // const pass = document.getElementById('pass')
    // const button = document.getElementById('button')

    // if(usuario == 'adminFunko' && pass == '743Af'){
    //     window.location.href = '../page/administrador.html'
    // }

    // button.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     const data = {
    //         usuario: usuario.value,
    //         pass: pass.value
            
        
    //     }
       
    //     console.log(data)
    // })
    