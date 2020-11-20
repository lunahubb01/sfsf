var product = {};

let element = document.getElementById("coments")

var stars = ``

function showProducts(products, relacionados){

    let htmlProducts = "";

    for(let i = 0; i < relacionados.length; i++){
       
        console.log(products[relacionados[i]])

        let relacionado = products[relacionados[i]];

        htmlProducts += `
        <a href="product-info.html?Prod=`+ relacionado.name +`" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + relacionado.imgSrc + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ relacionado.name +`</h4>
                    <small class="text-muted">$`+relacionado.currency + " "+ relacionado.cost +`</small>

                </div>
                <p class="mb-1">` + relacionado.description + `</p><br>
                <small><p>`+relacionado.soldCount+` artículos</p></small>
            </div>
        </div>
    </a>
    `
}

document.getElementById("products").innerHTML += htmlProducts;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        

        {
            let productoActual = getQueryVariable("Prod");
           
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productsoldCountHTML = document.getElementById("productsoldCount");
            let productCostHTML  = document.getElementById("productCost");
            let productCategoryHTML  = document.getElementById("productCategory");

            productNameHTML.innerHTML = productoActual.replace(/%20/g, " ");
            productDescriptionHTML.innerHTML = product.description;
            productsoldCountHTML.innerHTML = product.soldCount;
            productCostHTML.innerHTML = product.currency +  + product.cost;
            productCategoryHTML.innerHTML = product.category;

            relatedProducts = product.relatedProducts;

            
        }
        getJSONData(PRODUCTS_URL).then(function(item){
            if (item.status === "ok"){

                products1 = item.data;

                showProducts(products1, relatedProducts)
            }
        });
    });

        fetch(PRODUCT_INFO_COMMENTS_URL)
        .then(response => response.json()) 
        .then(data => {
               
        for (let i = 0; i < data.length; i++) {

            for (let j = 0; j < data[i].score; j++){
                stars = stars+`<span class="fa fa-star checked"></span>`

            }
    
            for (let j = 0; j < 5-data[i].score; j++){
                stars = stars+`<span class="fa fa-star"></span>`
            
            }
            

        element.innerHTML += ` 
        <p>Usuario: ${data[i].user}</p>
        <p>Puntuación: `+ stars +`</p>
        <p>${data[i].description}</p>
        <p>Fecha: ${data[i].dateTime}</p>
        <br>
        `
        stars = ``
        
        }
      
    })     
      
    });
    
    function littleStars(empty, full){
        for (let j = 0; j < full; j++){
            stars = stars+`<span class="fa fa-star checked"></span>`
            

        }


        for (let j = 0; j < empty; j++){
            stars = stars+`<span class="fa fa-star"></span>`
        
        }
        return stars;
    }

    var user = localStorage.getItem("user") 
    
    document.getElementById("user1").innerHTML += user;

    document.getElementById("boton2").addEventListener('click', (event)=>{
        var textarea = document.getElementById("comment1").value;
        
        let hoy = new Date();
        let fecha = hoy.getFullYear() + '-' + hoy.getMonth() + '-' + hoy.getDate() + ' ' + hoy.getHours() + ':' +
        hoy.getMinutes() + ':' + hoy.getSeconds();
        let punt = document.getElementById("punt").value;

        let emptystars = 5-punt;

        littleStars(emptystars, punt);
        
        element.innerHTML += ` 
        <p>Usuario: ${user}</p>
        <p>Comentario: ${textarea}</p>
        <p>Fecha: ${fecha}</p>
        <p>Puntuacion: `+ stars +`</p>
        
        </br>
        `
        stars = ``
    });

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0; i < vars.length; i++) {
            var pair = vars[i].split("=");
        if(pair[0] == variable) {
            return pair[1];
         }
     }
            return false;
     }
    
   






    

    
    


        

  
        
            
              
        
    
