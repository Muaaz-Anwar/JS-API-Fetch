
var submit = document.querySelector(".submit");
var contain =  document.querySelector("#meal-container");
contain.innerHTML = "";
submit.onclick = () => {
    var searched = document.querySelector(".search input").value;
    var text = document.querySelector(".search-results h2 span");
    text.innerHTML = '"' + searched + '"';
    logMovies(searched);
}

async function logMovies(searchText) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
    const mealdata = await response.json();
    contain.innerHTML = "";
    if(mealdata && mealdata.meals && searchText != ""){
        mealdata.meals.forEach(item => {
            contain.innerHTML += `
             <div class="card">
                     <div class="image">
                         <img src="${item.strMealThumb}"
                             alt="">
                     </div>
                     <div class="content">
                         <h1>${item.strMeal}</h1>
                     </div>
                 </div>
             `;
         });
    }else{
        alert("No product available or search field is empty");
    }
  }

  // Call the function with a search query
  
