//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

         var form = document.querySelector('form');
         var data = new FormData(form);             
         console.log(data)

   document.getElementById("userinfo").addEventListener("submit", (evento)=> {
       evento.preventDefault();
       window.location.href = "index.html";
       sessionStorage.setItem("logueado",true);
       return true;

    
   })
});

