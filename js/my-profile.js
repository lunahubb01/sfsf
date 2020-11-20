//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
});

let datosG = []

document.getElementById("showImage").innerHTML = `<img src="`+localStorage.getItem("image")+`" alt="">`;     

document.getElementById("savedData").addEventListener("submit", (e) => {
    var nombres = document.getElementById("names").value
    var apellidos = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var telefono = document.getElementById("phone").value
    var biografia = document.getElementById("biography").value

    var data = {
        Nombres: nombres,
        Apellidos: apellidos,
        Email: email,
        Telefono: telefono,
        Biografía: biografia
    }

    datosG.push(data)

    JSONDatos = JSON.stringify(data);
    localStorage.setItem("Datas", JSONDatos);
    JSON.parse(localStorage.getItem("Datas"))

    localStorage.setItem("image", "https://i.ibb.co/J5vRFTL/bulmita.png" );
})

if (localStorage.getItem("Datas") === null) {

}
else {
    document.getElementById("names").value = JSON.parse(localStorage.getItem("Datas")).Nombres;
    document.getElementById("lastname").value = JSON.parse(localStorage.getItem("Datas")).Apellidos;
    document.getElementById("email").value = JSON.parse(localStorage.getItem("Datas")).Email;
    document.getElementById("phone").value = JSON.parse(localStorage.getItem("Datas")).Telefono;
    document.getElementById("biography").value = JSON.parse(localStorage.getItem("Datas")).Biografía;
}

