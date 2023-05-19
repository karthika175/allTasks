

let urlParams = new URLSearchParams(window.location.search);
mainId=document.getElementById("category");

function home(){
    window.location.href = "index.html";
}
async function listening(param){
    let value=param.value;
    console.log("value",value);
    window.location.href = "singleCategory.html?category=" + `${value}`;
}
async function category_disp()
{
    let categoryJson=await fetch(`https://dummyjson.com/products/categories`);
    let categories = await categoryJson.json();
    
    console.log("categories"+categories);
    let button,txt,nameOfCategory,param,i=0;
    
    for(let product of categories){
       
        button=document.createElement("button");
        button.type="submit";
        button.value=product;
        
       // nameOfCategory=button.id;
        param=product.substring(0,3)+"generateId"+i;
        button.setAttribute("id",param);
        console.log( "products" + button.id);
        button.setAttribute("onclick","listening("+button.id+")")
        txt=document.createTextNode(product);
        button.appendChild(txt);
        mainId.appendChild(button);
        i++;
    }
}
category_disp();