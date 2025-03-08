
const mealsEl = document.getElementById('meals');


async function getRandomMeal(){
    const { meals } = await (await fetch('https://www.themealdb.com/api/json/v1/1/random.php')).json();
    const randomMeal = meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true);
}
getRandomMeal();

async function getMealById(){
   const meal =  await fetch('https://www.themealdb.com/api/json/v1/1/random.php' + id);
}

async function getMealBySearch(term){
    const meals = await  fetch('https://www.themealdb.com/api/json/v1/1/random.php' + term);
}

function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    // console.log(random);

    meal.innerHTML = `
    <div class="meal-header">
        ${random ? `<span class="random"> Random Recipe </span>` : ''}
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn ">
            <i class="fas fa-heart"></i> Heart 
        </button>
    </div>
    `;

     meal.querySelector('.fav-btn').addEventListener('click', (e) => {
         e.currentTarget.classList.toggle('active');
      
     })

    mealsEl.appendChild(meal);


}

// Save meal ID to localStorage
function addMealToLS(mealId) {
    const mealIds = getMealsFromLS();
    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));
}

// Get favorite meal IDs from localStorage
function getMealsFromLS() {
    return JSON.parse(localStorage.getItem('mealIds')) || [];
}

// Remove meal from localStorage
function removeMealFromLS(mealId) {
    const mealIds = getMealsFromLS();
    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)));
}

// Fetch and display favorite meals
async function updateFavMeals() {
    favMealsContainer.innerHTML = ''; // Clear existing content
    const mealIds = getMealsFromLS();

    for (let id of mealIds) {
        const meal = await getMealById(id);
        addMealToFavorites(meal);
    }
}

// Event listener to toggle favorite
favBtn.addEventListener('click', () => {
    if (favBtn.classList.contains('active')) {
        removeMealFromLS(mealData.idMeal);
        favBtn.classList.remove('active');
    } else {
        addMealToLS(mealData.idMeal);
        favBtn.classList.add('active');
    }
    updateFavMeals();
});

