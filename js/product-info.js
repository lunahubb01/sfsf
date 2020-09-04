var product = {};

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

            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productsoldCountHTML = document.getElementById("productsoldCount");
            let productCostHTML  = document.getElementById("productCost");
            let productCategoryHTML  = document.getElementById("productCategory");




        
            productNameHTML.innerHTML = product.name;
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
         
        let element = document.getElementById("coments")
            console.log(data)
        for (let i = 0; i < data.length; i++) {

          element.innerHTML += ` 

        
        
        <p>Usuario: ${data[i].user}</p>
        <p>Puntuación: ${data[i].score}</p>
        <p>${data[i].description}</p>
        <p>Fecha: ${data[i].dateTime}</p>

        <br />

        `

               
        

        }
      
        
    })
   
      
                
              
      
            });
            
              
        

