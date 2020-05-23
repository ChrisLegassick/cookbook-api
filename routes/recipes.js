const express = require('express');
const {
  getRecipes,
  createRecipe
  // deleteRecipe - add in later version
} = require('../controllers/recipes');
const router = express.Router();

router
  .route('/')
  .get(getRecipes)
  .post(createRecipe);

// router.route('/:id').delete(deleteRecipe); - add in later version

module.exports = router;
