var product = {};

let element = document.getElementById("coments")

var estrellas = ``

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
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


            



            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);

        }

    });

        fetch(PRODUCT_INFO_COMMENTS_URL)
        .then(response => response.json()) 
        .then(data => {
         
            
        for (let i = 0; i < data.length; i++) {

            for (let j = 0; j < data[i].score; j++){
                estrellas = estrellas+`<span class="fa fa-star checked"></span>`
                console.log(data.score)

            }
    
            for (let j = 0; j < 5-data[i].score; j++){
                estrellas = estrellas+`<span class="fa fa-star"></span>`
            
            }
            

          element.innerHTML += ` 
        
        
        <p>Usuario: ${data[i].user}</p>
        <p>Puntuación: `+ estrellas +`</p>
        <p>${data[i].description}</p>
        <p>Fecha: ${data[i].dateTime}</p>
        <br>
        `
        estrellas = ``
        

        

        }
      
    })
   
      
                
              
      
    });
    
    function estrellitas(vacias, llenas){
        for (let j = 0; j < llenas; j++){
            estrellas = estrellas+`<span class="fa fa-star checked"></span>`
            

        }


        for (let j = 0; j < vacias; j++){
            estrellas = estrellas+`<span class="fa fa-star"></span>`
        
        }
        return estrellas;
    }

    var user = localStorage.getItem("user") 
    
    document.getElementById("user1").innerHTML += user;

    document.getElementById("boton2").addEventListener('click', (event)=>{
        var textarea = document.getElementById("cuerpo").value;
        
        let hoy = new Date();
        let fecha = hoy.getFullYear() + '-' + hoy.getMonth() + '-' + hoy.getDate() + ' ' + hoy.getHours() + ':' +
        hoy.getMinutes() + ':' + hoy.getSeconds();
        let punt = document.getElementById("punt").value;

        let estrellitasvacias = 5-punt;

        estrellitas(estrellitasvacias, punt);

        
       console.log(estrellas)
        element.innerHTML += ` 
        
        <p>Usuario: ${user}</p>
        <p>Comentario: ${textarea}</p>
        <p>Fecha: ${fecha}</p>
        <p>Puntuacion: `+ estrellas +`</p>
        
        </br>
        `
        estrellas = ``
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

           var prodrel = {};
        document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(PRODUCTS_URL).then(function (resultObj) {
              if (resultObj.status === "ok") {
                prodrel = resultObj.data;
            let prodrelCar = document.getElementById("productProdrel");
            prodrelCar.innerHTML += `
            <a href="product-info.html?product=`+ prodrel[1].name +`" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + prodrel[1].imgSrc + `" alt="` + prodrel[1].description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ prodrel[1].name +` - `+ prodrel[1].currency +  prodrel[1].cost +`</h4>
                           
                            <small class="text-muted">` + prodrel[1].soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + prodrel[1].description + `</p>
                    </div>
                </div>
            </a>
            `
        }
        });
    });

            var prodrel2 = {};
        document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(PRODUCTS_URL).then(function (resultObj) {
             if (resultObj.status === "ok") {
                prodrel2 = resultObj.data;
                let prodrelCar2 = document.getElementById("productProdrel2");
                    prodrelCar2.innerHTML += `
            <a href="product-info.html?product=`+ prodrel2[3].name +`" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + prodrel2[3].imgSrc + `" alt="` + prodrel2[3].description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ prodrel2[3].name +` - `+ prodrel2[3].currency +  prodrel2[3].cost +`</h4>
                           
                            <small class="text-muted">` + prodrel2[3].soldCount + ` artículos</small>
                        </div>
                        <p class="mb-1">` + prodrel2[3].description + `</p>
                    </div>
                </div>
            </a>
            `
        }
    });
});
   



    

    
    


        

  
        
            
              
        

