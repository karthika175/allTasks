let cartCount=1,unique=1,total=0,netAmount=0,parseNetValue=0;
let cardId=document.getElementById("cartDisplay");
async function displayCardsCart(){ 
    console.log("cartid"+cardId);
    localStorageArray(cardId);

}
displayCardsCart();

function makeCardForCart(singleProduct,commonDiv){
    
    let sub,imageDiv,anchor,productId,detailsDiv,title,titleTxt,price,priceValue,img,removeButton,removeButtonValue;
   
    sub=document.createElement("div");
    productId=singleProduct.id;
        
    sub.setAttribute("class","cartItem");
    sub.setAttribute("id",productId);
    imageDiv=document.createElement("div");
    anchor=document.createElement("a");
    parseNetValue=parseInt(singleProduct.price);
    console.log('parseNetValue'+parseNetValue);
    netAmount=parseNetValue+netAmount;
    console.log("netValue"+netAmount);
    img=document.createElement("img");
    img.setAttribute("id",productId);
    img.src=(singleProduct.images[0]);
    anchor.appendChild(img);
    imageDiv.appendChild(anchor);
    sub.appendChild(imageDiv);
    detailsDiv=document.createElement("div");
    detailsDiv.setAttribute("class","cartDetail");
    title=document.createElement("p");
    title.classList.add("title");
    titleTxt=document.createTextNode(singleProduct.title);
    title.appendChild(titleTxt);
    sub.appendChild(title);
    price=document.createElement("p");
    price.classList.add("title");
    price.setAttribute("id","price");
    priceValue=document.createTextNode("price : $" + singleProduct.price);
    price.appendChild(priceValue);
    removeButton=document.createElement("button");
    removeButtonValue=document.createTextNode("Remove");
    removeButton.setAttribute("onclick","removeBtn("+productId+","+parseNetValue+")")
    removeButton.appendChild(removeButtonValue);
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(price);
    detailsDiv.appendChild(removeButton);
   
    sub.appendChild(detailsDiv);
  
    commonDiv.appendChild(sub);
 
  
}

async function localStorageArray(cardId){
   // console.log(cardId);
    let result=JSON.parse(localStorage.getItem("cartItem"));
    console.log(result["cart"]);
   
    let commonDiv=document.createElement("div");
    commonDiv.setAttribute("id","cartAllItem");
    for (let index in result["cart"]) {
       // console.log(result["cart"][index]);
        let productJson=await fetch(`https://dummyjson.com/products/${result["cart"][index]}`);
        let singleProduct =await productJson.json();
        makeCardForCart(singleProduct,commonDiv);
        
    }
    grandTotalDiv=document.createElement("div");
    grandTotalDiv.setAttribute("class","grandTotalDiv");
    grandBorder=document.createElement("div");
    grandBorder.setAttribute("class","grandBorder");
    grandTotalPTag=document.createElement("p");
    grandTotalPTag.setAttribute("class","grandTotal");
    grandTotaltxtNode=document.createTextNode("Total Amount : "+netAmount);
    grandTotalPTag.appendChild(grandTotaltxtNode);
    grandBorder.appendChild(grandTotalPTag);
    grandTotalDiv.appendChild(grandBorder);
    grandTotalButton=document.createElement("button");
    grandTotalButtonTxtNode=document.createTextNode("Place your order");
    grandTotalButton.appendChild(grandTotalButtonTxtNode);
    grandBorder.appendChild(grandTotalButton)
    grandTotalDiv.appendChild(grandBorder);
    
    
    cardId.replaceChildren();
    cardId.appendChild(commonDiv);
    cardId.appendChild(grandTotalDiv);
    //delegationCart();
}
function removeBtn(location,cardAmount){
    console.log("cardAmount"+cardAmount);
    console.log("netAmount"+netAmount);
    
    let removeCard=document.getElementById(location);
    let modiftAmount=document.getElementsByClassName("grandTotal")[0];
    // let currentTotalValue=modiftAmount.;
    // console.log(currentTotalValue);
    netAmount=netAmount-cardAmount;
    modiftAmount.innerHTML="Total Amount : $" + netAmount;
    console.log("parseNetValue"+netAmount);

    removeCard.remove();
}


