
   //PARA CREAR USUARIOS SIN PERMISOS ESPECIALES
   const usuario = document.getElementById('usuario')
    const pass = document.getElementById('pass')
    const button = document.getElementById('button')

    button.addEventListener('click', (e) => {
        e.preventDefault()
        const data = {
            usuario: usuario.value,
            pass: pass.value
            
        
        }
       
        console.log(data)
    })
    
    // "José... está para agregarle una nueva key para local storage y sumarle el agregar y eliminar
    // por otro lado hacerle también un .map para crear una tabla con los usuarios comunes
    // "