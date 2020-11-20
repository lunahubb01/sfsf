//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
});

let datosG = []

document.getElementById("imagenmostrar").innerHTML = `<img src="`+localStorage.getItem("imagen")+`" alt="">`;     

document.getElementById("datosguardados").addEventListener("submit", (e) => {
    var nombres = document.getElementById("nombres").value
    var apellidos = document.getElementById("apellidos").value
    var email = document.getElementById("email").value
    var telefono = document.getElementById("telefono").value
    var biografia = document.getElementById("biografia").value

    var datos = {
        Nombres: nombres,
        Apellidos: apellidos,
        Email: email,
        Telefono: telefono,
        Biografía: biografia
    }

    datosG.push(datos)

    JSONDatos = JSON.stringify(datos);
    localStorage.setItem("Datos", JSONDatos);
    JSON.parse(localStorage.getItem("Datos"))

    localStorage.setItem("imagen", "https://i.ibb.co/J5vRFTL/bulmita.png" );
})

if (localStorage.getItem("Datos") === null) {

}
else {
    document.getElementById("nombres").value = JSON.parse(localStorage.getItem("Datos")).Nombres;
    document.getElementById("apellidos").value = JSON.parse(localStorage.getItem("Datos")).Apellidos;
    document.getElementById("email").value = JSON.parse(localStorage.getItem("Datos")).Email;
    document.getElementById("telefono").value = JSON.parse(localStorage.getItem("Datos")).Telefono;
    document.getElementById("biografia").value = JSON.parse(localStorage.getItem("Datos")).Biografía;
}

