function CalcularTotal() {
    let cantidades = document.getElementsByClassName("canti");
    let preciosUnitarios = document.getElementsByClassName("unitario");
    let preciosSubtotales = document.getElementsByClassName("subtotal");
    let moneditas = document.getElementsByClassName("Moneda");
    let pesos = 0;
    
    for (let i = 0; i < cantidades.length; i++){
        preciosSubtotales[i].innerHTML = (parseInt(preciosUnitarios[i].innerHTML) * cantidades[i].value);
        console.log(moneditas[0].innerHTML)
        if (moneditas[i].innerHTML === "USD") {
            pesos += parseInt(preciosSubtotales[i].innerHTML * 40) 
        }
        else {
            pesos += parseInt(preciosSubtotales[i].innerHTML)
        }
    }
        document.getElementById("totali").innerHTML =  "Total: " + pesos + " UYU";
        return pesos;     
        }
   
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj)

            cart = resultObj.data.articles
            document.getElementById("cartt")

            for (let i = 0; i < cart.length; i++){

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


          
        
          
    


