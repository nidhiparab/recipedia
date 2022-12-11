// @ts-check

/** Represents a recipe. */
class Recipe {
  /**
   * Creates a new instance of `Recipe`.
   * @param {string} name The recipe's name.
   * @param {string} category The recipe's category.
   * @param {number} rating The recipe's rating from 0 to 5.
   * @param {string} preparationTime The recipe's preparation time in a string
   * format.
   * @param {string} image The recipe's image.
   */
  constructor(name, category, rating, preparationTime, image) {
    this.name = name;
    this.category = category;
    this.rating = rating;
    this.preparationTime = preparationTime;
    this.image = image;
  }
}
