let locate=document.getElementById("result");
console.log(locate);
fetching("https://dummyjson.com/products",locate);

function fetching(file,locate){
    fetch(file)
    .then(function(response){
    return response.json();
    })
    .then(async function(data){
         displayCards(data,locate); 
         delegation();
          
    });
}
const searchInput = document.querySelector('#search');
let debounceTimer;
   // let locate = document.getElementsByClassName("searchResult");
   searchInput.addEventListener("input",function(){
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const searchText = searchInput.value;
      let url = 'https://dummyjson.com/products/search?q=';
      try {
        let response = await fetch(url + searchText);
        let searchjson = await response.json();
        let locate = document.getElementsByClassName('searchResult')[0];
        displayCards(searchjson,locate); 
        delegation();
        
      } catch (error) {
        console.error('Error searching for products:', error);
      }
    }, 500);
  });