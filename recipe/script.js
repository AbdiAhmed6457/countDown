
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

addMeal(mealData, random = false) {
    const meal = document.createElement('div');
    meal.classList.add('meal');
}