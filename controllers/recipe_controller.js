const express = require('express')
const Recipes = require('../models/recipe.js')
const recipes = express.Router()



// NEW
APP.get('/recipe/new', (req, res) => {
    res.render('new.ejs')
});


// DELETE
APP.delete('/:id', (req, res) => {
    Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
        res.redirect('/recipe')
    });
});

// SHOW
APP.get('/recipe/:id', (req,res) => {
    res.render('show.ejs', {
        recipe: recipes[req.params.id]
    });
});