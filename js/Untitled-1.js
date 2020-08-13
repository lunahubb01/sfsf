var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function GATO(lufi){
    htmlContentToAppend +=`
    <a href="GATITOS.html">
                        <div class="d-flex w-100 justify-content-between">
                        </div>
                        <p>` + GATITOS.text + `</p>
                    </div>
                    
                </div>
            </a>`

            document.getElementById(gatotes).innerHTML=htmlContentToAppend
}


console.log(getJSONData)
