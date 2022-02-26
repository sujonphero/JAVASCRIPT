const searchButton = () => {
  // get foodInput.
  const foodInput = document.getElementById('food-input');
  const foodInputText = foodInput.value;
  // clear the input field.
  foodInput.value = '';

  // get load data.
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodInputText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealData(data.meals))
}
 // display mealdata.
const displayMealData = meals => {
  const firstDiv = document.getElementById('first-div');
  firstDiv.textContent = '';
  meals.forEach(meal => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div onclick="idData(${meal.idMeal})" class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
    </div>
  </div>
    `;
    firstDiv.appendChild(div)
  });
};

// get single id data.
const idData = singleMeal =>{
  const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singleMeal}`
  fetch(url2)
  .then(res => res.json())
  .then(data => displaySingleData(data.meals[0]))
}

// display single data with id.
const displaySingleData = food => {
  const miniDiv = document.getElementById('mini-div');
  miniDiv.textContent = '';
  const div = document.createElement('div')
  div.classList.add('card')
  div.innerHTML = `
  <img src="${food.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${food.strMeal}</h5>
    <p class="card-text">${food.strInstructions}</p>
    <a href="${food.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  miniDiv.appendChild(div)
}