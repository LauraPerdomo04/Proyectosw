<<<<<<< HEAD
var formulario = document.getElementById('formulario');
var alertas = document.getElementById('alertas');
=======
var formulario = document.getElementById('formulario')
var alertas = document.getElementById('alertas')
>>>>>>> e0c43689bfeb160b195c7dbd21f364cbb01f71cc

formulario.addEventListener('submit',function(e){
   e.preventDefault()
   console.log('presiono el boton')

   var datos = new FormData(formulario)

    console.log(datos.get('nombre'))
    console.log(datos.get('apellido'))
    console.log(datos.get('telefono'))
    console.log(datos.get('email'))
    console.log(datos.get('direccion'))
    console.log(datos.get('carrera'))
    console.log(datos.get('semestre'))
    console.log(datos.get('password'))
    console.log(datos.get('ConfirmPassword'))


   fetch('../../controlador/registro.php',{
       method: 'POST',
       body: datos
   })
   .then(res => res.json())
   .then(data => {
       console.log(data)
       if (data === 'INCOMPLETO'){
        alertas.innerHTML = `
         <div class="alert alert-danger" role="alert">
          Todos los campos son obligatorios.
        </div>
        `
       }else if (data === 'CONTRASENIAS NO COINCIDEN'){
        alertas.innerHTML = `

         <div class="alert alert-warning" role="alert">
          Las contraseñas no coinciden.
        </div>
        `
       }else if (data === 'correo mal'){
        alertas.innerHTML = `

         <div class="alert alert-warning" role="alert">
          El correo debe ser el institucional de la universidad El Bosque.
        </div>
        `
       }
       else if (data === 'correcto'){
        alertas.innerHTML = `

         <div class="alert alert-primary" role="alert">
          TODO ESTA PERFECTO PA REDIRIGIR
        </div>
        `
       }
   })
})