const ErrorResponse = require('../utils/errorResponse');
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

// Get single recipe by ID - error handler test
exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return next(
        new ErrorResponse(`Recipe not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: recipe
    });
  } catch (err) {
    next(
      new ErrorResponse(`Recipe not found with id of ${req.params.id}`, 404)
    );
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
