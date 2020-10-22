function CalcularTotal() {
    let cantidades = document.getElementsByClassName("canti");
    let preciosUnitarios = document.getElementsByClassName("unitario");
    let preciosSubtotales = document.getElementsByClassName("subtotal");
    let moneditas = document.getElementsByClassName("Moneda");
    let pesos = 0;

    for (let i = 0; i < cantidades.length; i++) {
        preciosSubtotales[i].innerHTML = (parseInt(preciosUnitarios[i].innerHTML) * cantidades[i].value);
        console.log(moneditas[0].innerHTML)
        if (moneditas[i].innerHTML === "USD") {
            pesos += parseInt(preciosSubtotales[i].innerHTML * 40)
        }
        else {
            pesos += parseInt(preciosSubtotales[i].innerHTML)
        }
    }
    document.getElementById("totali").innerHTML = "Total: " + pesos + " UYU";
    return pesos;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj)

            cart = resultObj.data.articles
            document.getElementById("cartt")

            for (let i = 0; i < cart.length; i++) {

                document.getElementById("carrote").innerHTML += `
                <tbody>
                <tr class="tabla">
                    <td> <img src="` + cart[i].src + `" style="width: 3cm" class="img-thumbnail"></td>
                    <td> `+ cart[i].name + `</td>
                    <td><input class="canti"style="width: 3cm; border: 0;" min="1" type="number" value="` + cart[i].count + `" onchange="CalcularTotal()"></td>
                    <td class="Moneda">`+ cart[i].currency + `</td>
                    <td class="unitario">`+ cart[i].unitCost + `</td>
                    <td class="subtotal">`+ cart[i].unitCost * cart[i].count + `</td>
                </tr>
                </tbody>
             `
            }

        }
        document.getElementById("totali").innerHTML = "Total: " + CalcularTotal() + " UYU";
    })
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
// document.addEventListener("DOMContentLoaded", function (e) {
// document.getElementById("productCountInput").addEventListener("change", function(){
//     productCount = this.value;
//     updateTotalCosts();
// });

// document.getElementById("productCostInput").addEventListener("change", function () {
//     productCost = this.value;
//     updateTotalCosts();
// });

// document.getElementById("goldradio").addEventListener("change", function () {
//     comissionPercentage = 0.13;
//     updateTotalCosts();
// });

// document.getElementById("premiumradio").addEventListener("change", function () {
//     comissionPercentage = 0.07;
//     updateTotalCosts();
// });

// document.getElementById("standardradio").addEventListener("change", function () {
//     comissionPercentage = 0.03;
//     updateTotalCosts();
// });

// document.getElementById("productCurrency").addEventListener("change", function () {
//     if (this.value == DOLLAR_CURRENCY) {
//         MONEY_SYMBOL = DOLLAR_SYMBOL;
//     }
//     else if (this.value == PESO_CURRENCY) {
//         MONEY_SYMBOL = PESO_SYMBOL;
//     }

//     updateTotalCosts();
// });

//Configuraciones para el elemento que sube archivos
// var dzoptions = {
//     url: "/",
//     autoQueue: false
// };
// var myDropzone = new Dropzone("div#file-upload", dzoptions);


//Se obtiene el formulario de publicación de producto
// var sellForm = document.getElementById("sell-info");

//Se agrega una escucha en el evento 'submit' que será
//lanzado por el formulario cuando se seleccione 'Vender'.
// sellForm.addEventListener("submit", function (e) {

//     let productNameInput = document.getElementById("productName");
//     let productCategory = document.getElementById("productCategory");
//     let productCost = document.getElementById("productCostInput");
//     let infoMissing = false;

//Quito las clases que marcan como inválidos
// productNameInput.classList.remove('is-invalid');
// productCategory.classList.remove('is-invalid');
// productCost.classList.remove('is-invalid');

//Se realizan los controles necesarios,
//En este caso se controla que se haya ingresado el nombre y categoría.
//Consulto por el nombre del producto
// if (productNameInput.value === "") {
//     productNameInput.classList.add('is-invalid');
//     infoMissing = true;
// }

//Consulto por la categoría del producto
// if (productCategory.value === "") {
//     productCategory.classList.add('is-invalid');
//     infoMissing = true;
// }

//Consulto por el costo
// if (productCost.value <= 0) {
//     productCost.classList.add('is-invalid');
//     infoMissing = true;
// }

// if (!infoMissing) {
//Aquí ingresa si pasó los controles, irá a enviar
//la solicitud para crear la publicación.

// getJSONData(PUBLISH_PRODUCT_URL).then(function (resultObj) {
//     let msgToShowHTML = document.getElementById("resultSpan");
//     let msgToShow = "";

//Si la publicación fue exitosa, devolverá mensaje de éxito,
//de lo contrario, devolverá mensaje de error.
// if (resultObj.status === 'ok') {
//     msgToShow = resultObj.data.msg;
//     document.getElementById("alertResult").classList.add('alert-success');
// }
// else if (resultObj.status === 'error') {
//     msgToShow = ERROR_MSG;
//     document.getElementById("alertResult").classList.add('alert-danger');
// }

//         msgToShowHTML.innerHTML = msgToShow;
//         document.getElementById("alertResult").classList.add("show");
//     });
// }

//Esto se debe realizar para prevenir que el formulario se envíe (comportamiento por defecto del navegador)
//     if (e.preventDefault) e.preventDefault();
//     return false;
// });

document.addEventListener("DOMContentLoaded", () => {
    var regex = /^\d{1,4}$/;
    var regexInput = document.getElementById("regex-input");
    var match = document.getElementById("match");
    regexInput.addEventListener("keyup", (e) => {
        if (regex.test(regexInput.value)) {
            match.innerHTML = `
                <span style="color:green;"></span>
                `
        } else {
            match.innerHTML = `
                <span style="color:red;">Por favor, indiqué un número menor a 5 digítos</span>
                `
        }

    })
});

// Eventos de validación para inputs de envio y forma de pago
document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^[a-z A-Z.]*$/;
    var regexInput1 = document.getElementById("regex-input1");
    var match1 = document.getElementById("match1");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    <span style="color:green;"></span>
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indiqué una calle.</span>
                    `
        }

    })


});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^[a-z A-Z.]*$/;
    var regexInput1 = document.getElementById("regex-input2");
    var match1 = document.getElementById("match2");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    <span style="color:green;"></span>
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indiqué una calle.</span>
                    `
        }

    })


});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^[a-z A-Z]*$/;
    var regexInput1 = document.getElementById("regex-input3");
    var match1 = document.getElementById("match3");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    <span style="color:green;"></span>
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indiqué un nombre válido.</span>
                    `
        }

    })


});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^\d{8,9}$/;
    var regexInput1 = document.getElementById("regex-input4");
    var match1 = document.getElementById("match4");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    <span style="color:green;"></span>
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indiqué un número válido.</span>
                    `
        }

    })


});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^\d{3}$/;
    var regexInput1 = document.getElementById("regex-input5");
    var match1 = document.getElementById("match5");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    <span style="color:green;"></span>
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indiqué un número válido.</span>
                    `
        }

    })


});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^\d{8,9}$/;
    var regexInput1 = document.getElementById("regex-input6");
    var match1 = document.getElementById("matche");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    <span style="color:green;"></span>
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indiqué un número válido.</span>
                    `
        }

    })


});







