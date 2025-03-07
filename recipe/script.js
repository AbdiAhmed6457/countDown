
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
        <button class="fav-btn active">
            <i class="fas fa-heart"></i> Heart 
        </button>
    </div>
    `;

     meal.querySelector('.fav-btn').addEventListener('click', () => {
        alert("why are yo doing this")
     })

    mealsEl.appendChild(meal);


}
