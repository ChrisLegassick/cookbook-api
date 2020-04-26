// @desc    Get all recipes
// @route   GET /api/v1/recipes
// @access  Public
exports.getRecipes = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all recipes' });
};

// @desc    Create new recipe
// @route   POST /api/v1/recipes
// @access  Private
exports.createRecipe = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new recipe' });
};

// @desc    Delete recipe
// @route   DELETE /api/v1/recipes/:id
// @access  Private
exports.deleteRecipe = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete recipe ${req.params.id}` });
};
