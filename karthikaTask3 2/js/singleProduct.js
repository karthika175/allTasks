let urlParams = new URLSearchParams(window.location.search);
let content = decodeURIComponent(urlParams.get("id"));
let contentElement = document.getElementById("description");

console.log(content);

async function displayDescription(){
    let productJson=await fetch(`https://dummyjson.com/products/${content}`);
    let singleProduct = await productJson.json();
    let title,titleText,img,category,price,priceValue,stock,stockValue,categoryValue,sibling2,sibling1,parent,description,descriptionValue;
    parent=document.createElement("div");
    parent.classList.add("singleProductParent");
    sibling1=document.createElement("div");
    sibling1.setAttribute("class","singleProductImg");
    img=document.createElement("img");
    img.src=(singleProduct.thumbnail);
    sibling1.appendChild(img);
    parent.appendChild(sibling1);
    sibling2=document.createElement("div");
    sibling2.setAttribute("class","singleProductDetails")
    category=document.createElement("p");
    categoryValue=document.createTextNode("CATEGORY:" +" "+ singleProduct.category);
    category.appendChild(categoryValue);
    sibling2.appendChild(category);
    title=document.createElement("p");
    titleText=document.createTextNode("TITLE:" +" "+ singleProduct.title);
    title.appendChild(titleText);
    sibling2.appendChild(title);
    price=document.createElement("p");
    priceValue=document.createTextNode("PRICE : $" +" "+ singleProduct.price);
    price.appendChild(priceValue);
    sibling2.appendChild(price);
    stock=document.createElement("p");
    stockValue=document.createTextNode("STOCK:" +" "+ singleProduct.stock);
    stock.appendChild(stockValue);
    sibling2.appendChild(stock);
    rating=document.createElement("p");
    ratingValue=document.createTextNode("RATING:" +" "+ singleProduct.rating);
    rating.appendChild(ratingValue);
    sibling2.appendChild(rating);
    description=document.createElement("p");
    descriptionValue=document.createTextNode("Description:" +" "+ singleProduct.description);
    description.appendChild(descriptionValue);
    sibling2.appendChild(description);
    parent.appendChild(sibling2);
    contentElement.appendChild(parent);
    
}
displayDescription();