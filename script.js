function createRecipeCard(name, category, rating, preparationTime, image) {
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

const $todaysHighlights = [
  createRecipeCard(
    'Spaghetti',
    'Pasta',
    5,
    '45min',
    'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.\
3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&\
q=80'
  ),
  createRecipeCard(
    'Bread',
    'Pasta',
    5,
    '10min',
    'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=co\
mpress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ),
  createRecipeCard(
    'Salad',
    'Vegetables',
    5,
    '20min',
    'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=comp\
ress&cs=tinysrgb&w=1260&h=750&dpr=1'
  )
];
$todaysHighlights.forEach(($todaysHighlight) => {
  const $todaysHighlightsContainer =
      document.querySelector('.todays-highlights-container');
  $todaysHighlightsContainer.append($todaysHighlight);
});