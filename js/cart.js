function CalcularTotal() {
    let total = 0;
    let cantidades = document.getElementsByClassName("canti");
    let preciosUnitarios = document.getElementsByClassName("unitario");
    let preciosSubtotales = document.getElementsByClassName("subtotal");

    
    for (let i = 0; i < cantidades.length; i++){
        preciosSubtotales[i].innerHTML = (parseInt(preciosUnitarios[i].innerHTML) * cantidades[i].value);
        total += parseInt(preciosSubtotales[i].innerHTML);
    }
    document.getElementById("total").innerHTML = total;
     return total;
}
        
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj)

            cart = resultObj.data.articles
            document.getElementById("cartt")

            for (let i = 0; i < cart.length; i++){

            document.getElementById("cartt").innerHTML += `
            <table style="width: 35cm; border: 2;">
           <thead>
                <tr> 
                <th>Artículo</th>
                <th>Nombre artículo</th>
                <th>Cantidad</th>
                <th>Moneda</th>
                <th>Precio</th>
                <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                    <td> <img src="` + cart[i].src + `" style="width: 3cm" class="img-thumbnail"></td>
                    <td> `+ cart[i].name + `</td>
                    <td><input class="canti"style="width: 3cm; border: 0;" min="1" type="number" value="` + cart[i].count + `" onchange="CalcularTotal()"></td>
                    <td><p>`+ cart[i].currency + `</p></td>
                    <td class="unitario">`+ cart[i].unitCost + `</td>
                    <td class="subtotal">`+ cart[i].unitCost * cart[i].count + `</td>
            </tbody>
            </table>

            `
           
           

            document.getElementById("total").innerHTML = CalcularTotal();
    }
}

            
        })

    });

          
        
          
    


