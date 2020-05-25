const mongoose = require('mongoose');
const slugify = require('slugify');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    lowercase: true
  },
  slug: String,
  instructions: {
    type: String,
    required: [true, 'Please add some instructions']
  },
  ingredients: {
    type: [String]
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  }
});

// Revisit later - slugs should/must be unique however recipes can share the same name
RecipeSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Recipe', RecipeSchema);
