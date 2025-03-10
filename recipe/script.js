const mealsEl = document.getElementById('meals');
const favoriteContainer = document.getElementById('favCon')
// Fetch and display a random meal
async function getRandomMeal() {
    const { meals } = await (await fetch('https://www.themealdb.com/api/json/v1/1/random.php')).json();
    const randomMeal = meals[0];
    addMeal(randomMeal, true);
}

getRandomMeal();
fetchFavMeals();

// Fetch meal by ID
async function getMealById(id) {
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;
}

// Add meal to favorites (localStorage)
function addMealLS(mealId) {
    const mealIds = getMealLS();
    localStorage.setItem('mealIds', JSON.stringify([...mealIds, mealId]));

}

// Remove meal from favorites (localStorage)
function removeMealLS(mealId) {
    const mealIds = getMealLS();
    localStorage.setItem('mealIds', JSON.stringify(mealIds.filter(id => id !== mealId)));

}

// Get meal data from localStorage
function getMealLS() {
    return JSON.parse(localStorage.getItem('mealIds')) || [];
}

// Fetch and display favorite meals
async function fetchFavMeals() {
    const mealIds = getMealLS();
    const meals = [];

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        try {
            const meal = await getMealById(mealId);

            addMealFav(meal);
        } catch (error) {
            console.error("Error fetching meal:", error);
        }
    }
    console.log(meals.length)
    console.log(meals);  // Log all meals fetched
}

// Add meal to the DOM
function addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
    <div class="meal-header">
        ${random ? `<span class="random"> Random Recipe </span>` : ''}
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn">
            <i class="fas fa-heart"></i> Heart
        </button>
    </div>
    `;

    const btn = meal.querySelector('.fav-btn');

    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove('active');
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add('active');
        }

        fetchFavMeals();
    });

    mealsEl.appendChild(meal);
}

function addMealFav(mealData) {
    const favMeal = document.createElement('li');
    favMeal.innerHTML = `
    <img 
       src="${mealData.strMealThumb}"
       alt="${mealData.strMeal}" />
    <span> ${mealData.strMeal} </span>
   
    `;


    favoriteContainer.appendChild(favMeal);
}
