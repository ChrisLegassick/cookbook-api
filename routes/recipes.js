const express = require('express');
const {
  getRecipes,
  getRecipe,
  getRandomRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipes');
const router = express.Router();

router
  .route('/')
  .get(getRecipes)
  .post(createRecipe);

router.route('/random').get(getRandomRecipe);

router
  .route('/:id')
  .get(getRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;
