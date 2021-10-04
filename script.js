
function createUserCategoies() {
    let userCategories= document.getElementsByClassName('list-group');
    for (const category in data.responses[0][0].params.userCategories) {
        var e = document.createElement('a');
        e.innerHTML = data.responses[0][0].params.userCategories[category];
        e.className="list-group-item list-group-item-action";
        if(category == 0){
            e.classList.add("active");
        }
        e.id="category-"+category;
        e.addEventListener('click', function(e) {
            selectCategory(e.target);
          });
        userCategories[0].appendChild(e);
    }
}

function createProductList() {
  
    let body=document.getElementById("category-body");
    let index=0;
    for (const category in data.responses[0][0].params.recommendedProducts) {
        var categoryDiv = document.createElement('div');
        categoryDiv.className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 product-list";
        if(index == 0){
            categoryDiv.classList.add("active");
        }
        categoryDiv.id="category-"+index+"-body";
        for (const productIndex in data.responses[0][0].params.recommendedProducts[category]) {
            let product=data.responses[0][0].params.recommendedProducts[category][productIndex];

            var categoryDiva = document.createElement('div');
            categoryDiva.className="col col-sm col-md col-lg";
            categoryDiva.style= "float:left;"
            categoryDiv.appendChild(categoryDiva);

            var categoryDivc = document.createElement('div');
            categoryDivc.className="card h-100 shadow-sm";
            
            categoryDiva.appendChild(categoryDivc);

            var categoryImg = document.createElement("img");
            categoryImg.setAttribute('src',product.image);
            categoryDivc.appendChild(categoryImg);

            var categoryDivd = document.createElement('div');
            categoryDivd.className="card-body";
            categoryDivc.appendChild(categoryDivd);

            var h = document.createElement("H5");
            h.className="card-title";
            h.innerHTML=product.name;
            categoryDivd.appendChild(h);

            var categoryDive = document.createElement('div');
            categoryDive.className="clearfix mb-3";
            categoryDivd.appendChild(categoryDive); 

            var categorySpan = document.createElement('span');
            categorySpan.className="float-start badge rounded-pill bg-primary";
            categorySpan.innerHTML=product.priceText;
            categoryDive.appendChild(categorySpan); 
           
            var categorySpana = document.createElement('span');
            categorySpana.className="float-end price-hp";
            categoryDive.appendChild(categorySpana); 
            if(product.params.shippingFee == "FREE"){
                var categoryDivf = document.createElement('div');
                categoryDivf.className="text-center my-4";
                categoryDivf.innerHTML = '<a>Ücretsiz Kargo</a> ';
                categoryDive.appendChild(categoryDivf); 
            }
           




            

            


            
        }

        body.appendChild(categoryDiv);
        index++;

    }
}

function selectCategory(ele) {
    let userCategoies= document.getElementsByClassName('list-group-item');

    Array.prototype.forEach.call(userCategoies, function(el) {
        el.classList.remove("active");
    });
    ele.classList.add("active");

    let productList= document.getElementsByClassName('product-list');
    Array.prototype.forEach.call(productList, function(el) {
        el.classList.remove("active");
    });

    document.getElementById(ele.id + "-body").classList.add("active");
}
window.onload = function() {
  createUserCategoies();
  createProductList();
};