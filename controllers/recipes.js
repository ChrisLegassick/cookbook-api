const Recipe = require('../models/Recipe');

// @desc    Get all recipes
// @route   GET /api/v1/recipes
// @access  Public
exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (err) {
    res.status(400).json({
      success: false
    });
  }
};

// @desc    Create new recipe
// @route   POST /api/v1/recipes
// @access  Private
exports.createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.status(201).json({
      success: true,
      data: recipe
    });
  } catch (err) {
    res.status(400).json({
      success: false
    });
  }
};

// @desc    Delete recipe - add in later version
// @route   DELETE /api/v1/recipes/:id
// @access  Private
// exports.deleteRecipe = (req, res, next) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete recipe ${req.params.id}` });
// };
