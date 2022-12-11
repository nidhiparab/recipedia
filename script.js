/**
 * Creates a recipe card element by using its template.
 * @param {{
 *   name: string,
 *   category: string,
 *   rating: number,
 *   preparationTime: string,
 *   image: string
 * }} recipeProperties An object that contains the recipe's properties.
 * @returns {Element} The recipe card element created.
 */
function createRecipeCard({ name, category, rating, preparationTime, image }) {
  const $template = document.querySelector('.js-template-recipe-card');
  const $recipeCard = $template.content.cloneNode(true);

  const $recipeCardName = $recipeCard.querySelector('.recipe-card-name');
  $recipeCardName.innerHTML = name;

  const $recipeCardCategory =
      $recipeCard.querySelector('.recipe-card-category');
  $recipeCardCategory.innerHTML = category;

  const $recipeCardRating = $recipeCard.querySelector('.recipe-card-rating');
  $recipeCardRating.innerHTML = rating;

  const $recipeCardPreparationTime =
      $recipeCard.querySelector('.recipe-card-preparation-time');
  $recipeCardPreparationTime.innerHTML = preparationTime;

  const $recipeCardImage = $recipeCard.querySelector('.recipe-card-image');
  $recipeCardImage.src = image;

  return $recipeCard;
}

/**
 * Adds the recipe cards elements that are inside of an array to the container
 * that corresponds to a certain query in the document.
 * @param {string} containerQuery The query to find the container.
 * @param {Element} $recipeCards The array containing the recipe cards elements.
 */
function addRecipeCardsToContainer(containerQuery, $recipeCards) {
  const $container = document.querySelector(containerQuery);
  $recipeCards.forEach(($recipeCard) => {
    $container.append($recipeCard);
  });
}

const $todaysHighlights = [
  createRecipeCard({
    name: 'Spaghetti',
    category: 'Pasta',
    rating: 5,
    preparationTime: '45min',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=\
rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop\
&w=880&q=80'
  }),
  createRecipeCard({
    name: 'Bread',
    category: 'Pasta',
    rating: 5,
    preparationTime: '10min',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?\
auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }),
  createRecipeCard({
    name: 'Salad',
    category: 'Vegetables',
    rating: 5,
    preparationTime: '20min',
    image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?au\
to=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  })
];

const $weeklyHighlights = [
  createRecipeCard({
    name: 'Spaghetti',
    category: 'Pasta',
    rating: 5,
    preparationTime: '45min',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=\
rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop\
&w=880&q=80'
  }),
  createRecipeCard({
    name: 'Bread',
    category: 'Pasta',
    rating: 5,
    preparationTime: '10min',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?\
auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }),
  createRecipeCard({
    name: 'Salad',
    category: 'Vegetables',
    rating: 5,
    preparationTime: '20min',
    image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?au\
to=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  })
];

const $communitySelections = [
  createRecipeCard({
    name: 'Spaghetti',
    category: 'Pasta',
    rating: 5,
    preparationTime: '45min',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=\
rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop\
&w=880&q=80'
  }),
  createRecipeCard({
    name: 'Bread',
    category: 'Pasta',
    rating: 5,
    preparationTime: '10min',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?\
auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }),
  createRecipeCard({
    name: 'Salad',
    category: 'Vegetables',
    rating: 5,
    preparationTime: '20min',
    image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?au\
to=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  })
];

addRecipeCardsToContainer('.todays-highlights-container', $todaysHighlights);
addRecipeCardsToContainer('.weekly-highlights-container', $weeklyHighlights);
addRecipeCardsToContainer(
  '.community-selections-container',
  $communitySelections
);
