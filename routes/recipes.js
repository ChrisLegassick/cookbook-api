const express = require('express');
const {
  getRecipes,
  createRecipe,
  deleteRecipe
} = require('../controllers/recipes');
const router = express.Router();

router
  .route('/')
  .get(getRecipes)
  .post(createRecipe);

router.route('/:id').delete(deleteRecipe);

module.exports = router;
