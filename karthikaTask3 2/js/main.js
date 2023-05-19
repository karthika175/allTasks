
let count=1,previous=0,cart,localArray=[],priceSummation=0;
async function category(){
    window.location.href = "category.html";
}
async function home(){
    window.location.href = "index.html";
}
function displayCart(){
    window.location.href = "cart.html";
}
function addCart(proId, element){
    previous=count;
    let x=0,txt;
    console.log(element);
    if(element.value == "true"){
    document.getElementById("cartNo").innerHTML=count;
    let oldTextNode = element.firstChild;
    element.removeChild(oldTextNode);
    txt=document.createTextNode("In the cart")
    element.appendChild(txt);
    localArray.push(proId);
    localStorage.setItem("cartItem",JSON.stringify({cart:localArray}));
    element.value="false"
    count++;
    }
    
}

function makingcard(product,commonDiv){
    let sub,imageDiv,anchor,productId,detailsDiv,title,titleTxt,price,priceValue,addToCartDiv,button,img,buttonTxt;
   
    sub=document.createElement("div");
    productId=product.id;
    
    sub.setAttribute("class","item");
    imageDiv=document.createElement("div");
    anchor=document.createElement("a");
    priceSummation+=product.price;
    img=document.createElement("img");
    img.setAttribute("id",productId);
    img.src=(product.images[0]);
    anchor.appendChild(img);
    imageDiv.appendChild(anchor);
    sub.appendChild(imageDiv);
    detailsDiv=document.createElement("div");
    title=document.createElement("p");
    title.classList.add("title");
    titleTxt=document.createTextNode(product.title);
    title.appendChild(titleTxt);
    sub.appendChild(title);
    price=document.createElement("p");
    price.classList.add("title");
    priceValue=document.createTextNode("Price : $" + product.price);
    price.appendChild(priceValue);
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(price);
    sub.appendChild(detailsDiv);
    addToCartDiv=document.createElement("div");
    button=document.createElement("button");
    button.type="submit";
    buttonTxt=document.createTextNode("Add To Cart");
    button.setAttribute("value","true");
    button.setAttribute("id",productId); 
    button.appendChild(buttonTxt);
    addToCartDiv.appendChild(button);
    sub.appendChild(addToCartDiv);
    commonDiv.appendChild(sub);
}
async function displayCards(data,cardItem){
    console.log("value"+data);
     console.log("card_item" + cardItem);
    commonDiv=document.createElement("div");
    commonDiv.setAttribute("id","allItem");
    for (let product of data.products) {
        makingcard(product,commonDiv); 
      }
   
    cardItem.replaceChildren();
    cardItem.appendChild(commonDiv);
}

async function delegation(){ 
    let parent=document.getElementById("allItem");
    parent.onclick = function(event) {
        console.log("event.target"+event.target.id);
        let productId=event.target.id;
        let button=event.target;
        if(event.target.tagName == 'IMG'){
            window.location.href = "description.html?id="+productId;
        }
        else if(event.target.tagName == 'BUTTON')
        {
            button.addEventListener("click", addCart(productId,button));
        }   
        else{
            return;
        }
    }
}

function goBack() {
    window.history.go(-1);
}
