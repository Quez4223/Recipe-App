const mongoose = require('mongoose');
const recipes = require('../controllers/recipe_controller');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    directions: { type: String, required: true },
    image: { type: String, }

});

const recipe = mongoose.model('recipe',recipeSchema)



module.exports = recipe;