const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  slug: String,
  instructions: {
    type: String,
    required: [true, 'Please add some instructions']
  },
  ingredients: {
    type: [String],
    required: true
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
