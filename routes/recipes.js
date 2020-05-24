const express = require('express');
const {
  getRecipes,
  createRecipe,
  // getRecipe used for testing
  getRecipe
  // deleteRecipe - add in later version
} = require('../controllers/recipes');
const router = express.Router();

router
  .route('/')
  .get(getRecipes)
  .post(createRecipe);

// router.route('/:id').delete(deleteRecipe); - add in later version
// getRecipe used for testing
router.route('/:id').get(getRecipe);

module.exports = router;
