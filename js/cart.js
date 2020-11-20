let porcentageDeComision = 0.15;

CalculateShipping();
CalculateTotal();

function CalculateTotal() {
    let quantity = document.getElementsByClassName("quantity");
    let unitaryPrice = document.getElementsByClassName("unitary");
    let SubtotalPrices = document.getElementsByClassName("subtotal");
    let Coins = document.getElementsByClassName("Coin");
    let pesos = 0;
    let comision = document.getElementById("comision");


    for (let i = 0; i < quantity.length; i++) {
        SubtotalPrices[i].innerHTML = (parseInt(unitaryPrice[i].innerHTML) * quantity[i].value);

        if (Coins[i].innerHTML === "USD") {
            pesos += parseInt(SubtotalPrices[i].innerHTML * 40)
        }
        else {
            pesos += parseInt(SubtotalPrices[i].innerHTML)
        }
    }

    document.getElementById("ProductCost1").innerHTML = "$" + pesos + " ";
    CalculateShipping();
    comision.innerHTML = "$" + porcentageDeComision * (parseInt(pesos));
    document.getElementById("TotalCost").innerHTML = "$" + (porcentageDeComision * (parseInt(pesos)) + (parseInt(pesos)));
    return pesos;

}

function CalculateShipping() {
    var selectedShipping = document.getElementsByName('publicationType');
    for (i = 0; i < selectedShipping.length; i++) {
        if (selectedShipping[i].checked)
            porcentageDeComision = selectedShipping[i].value;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
  
    getJSONData(CART_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj)

            cart = resultObj.data.articles

            for (let i = 0; i < cart.length; i++) {

                document.getElementById("shopCart").innerHTML += `
                <tbody>
                <tr class="tabla">
                    <td> <img src="` + cart[i].src + `" style="width: 3cm" class="img-thumbnail"></td>
                    <td> `+ cart[i].name + `</td>
                    <td><input class="quantity"style="width: 3cm; border: 0;" min="1" type="number" value="` + cart[i].count + `" onchange="CalculateTotal()"></td>
                    <td class="Coin">`+ cart[i].currency + `</td>
                    <td class="unitary">`+ cart[i].unitCost + `</td>
                    <td class="subtotal">`+ cart[i].unitCost * cart[i].count + `</td>
                </tr>
                </tbody>
             `
            }
        }
    })
});

// Eventos de validación para inputs de envio y forma de pago

document.addEventListener("DOMContentLoaded", () => {
    var regex = /^\d{1,4}$/;
    var regexInput = document.getElementById("regex-input");
    var match = document.getElementById("match");
    regexInput.addEventListener("keyup", (e) => {
        if (regex.test(regexInput.value)) {
            match.innerHTML = `
                `
        } else {
            match.innerHTML = `
                <span style="color:red;">Por favor, indique un número menor a 5 digítos</span>
                `
        }
    })
});


document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^[a-z A-Z.]*$/;
    var regexInput1 = document.getElementById("regex-input1");
    var match1 = document.getElementById("match1");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
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
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indique una calle.</span>
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
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indique un nombre válido.</span>
                    `
        }
    })
});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^\d{8,9}$/;
    var regexInput1 = document.getElementById("regex-input4");
    var match1 = document.getElementById("match4");
    regexInput1.addEventListener("keyup", (e) => {
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indique un número válido.</span>
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
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indique un número válido.</span>
                    `
            e.preventDefault;
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
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indique un número válido.</span>
                    `
        }
    })
});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^\d{8}$/;
    var regexInput1 = document.getElementById("regex-input7");
    var match1 = document.getElementById("matche1");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indique un número de cédulaválido.</span>
                    `
        }
    })
});

document.addEventListener("DOMContentLoaded", () => {
    var regex1 = /^\d{8}$/;
    var regexInput1 = document.getElementById("regex-input8");
    var match1 = document.getElementById("matche2");
    regexInput1.addEventListener("keyup", (e) => {
        console.log(regexInput1)
        if (regex1.test(regexInput1.value)) {
            match1.innerHTML = `
                    `
        } else {
            match1.innerHTML = `
                    <span style="color:red;">Por favor, indique un número de cédula válido.</span> 
                    `
        }
    })
});

function Deshabilitar() {
    if (document.getElementById("transf").checked) {
        document.getElementById("regex-input6").disabled = false;
        document.getElementById("regex-input8").disabled = false;
        document.getElementById("regex-input7").disabled = true;
        document.getElementById("regex-input4").disabled = true;
        document.getElementById("regex-input5").disabled = true;
        document.getElementById("fecha").disabled = true;
        document.getElementById("regex-input3").disabled = true;
    }
    if (document.getElementById("tarj").checked) {
        document.getElementById("regex-input6").disabled = true;
        document.getElementById("regex-input8").disabled = true;
        document.getElementById("regex-input7").disabled = false;
        document.getElementById("regex-input4").disabled = false;
        document.getElementById("regex-input5").disabled = false;
        document.getElementById("fecha").disabled = false;
        document.getElementById("regex-input3").disabled = false;
    }
}














