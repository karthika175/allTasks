
let urlParams = new URLSearchParams(window.location.search);
let content = decodeURIComponent(urlParams.get("category"));
console.log('category'+content);

let mainId=document.getElementById("singleCategory");
console.log("mainId"+mainId);

fetching(`https://dummyjson.com/products/category/${content}`,mainId);
