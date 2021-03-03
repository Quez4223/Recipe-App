const express = require('express')
const Recipe = require('../models/recipe.js')
const recipes = express.Router()



// NEW
recipes.get('/recipe/new', (req, res) => {
    res.render('recipe/new.ejs')
});


// DELETE
recipes.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
        res.redirect('/recipe')
    });
});

// SHOW
recipes.get('/recipe/:id', (req,res) => {
    res.render('recipe/show.ejs', {
        recipe: recipes[req.params.id]
    });
});


// INDEX
recipes.get('/recipe', (req, res) => {
    res.render('recipe/index.ejs', {
        allRecipes: recipes
    });
});

// SEED ROUTE
recipes.get('/setup/seed', (req, res) => {
    Recipe.create(
        [
            {
                name: 'Pasta Aglio e Olio',
                ingredients: 'pasta, parsley, olive oil , 2 cloves garlic, 1 teaspoon red pepper flakes, 1/2 lemon',
                directions: 'Salt large pot of water, bring to a boil. Cook pasta until almost done. Slice garlic cloves thinly and put aside. Chop parsley. Heat olive oil in large saute pan over medium heat. Add garlic stirring constantly, until softened and slightly golden around the edges. Add the red pepper flakes and lower the heat to medium-low. Add pasta, drained, saving some pasta cooking water. Squeeze lemon juice over top and, mix pasta with fresh parsley. Season with salt and pepper. If sauce is too watery, cook for additional 1-3 minutes. '  
            },
            {
                name: 'Hawaiian BBQ Quesadilla',
                ingredients: '1 pound chicken breast(or jackfruit), flour tortillas burrito size, 1/2 red onion, 1/3 sliced pineapple, 1/2 cup of your BBQ sauce, 2 tablespoons lime juice, 2 tablespoons fresh cilantro chopped, salt and pepper to taste, 8 oz shredded cheese.',
                directions: ''
            },
            {
                name: 'Paradise French Toast',
                ingredients: 'challah bread, 2 eggs, 1 tablespoon vanilla extract, 1 teaspoon ground cinnamon, 1/3 cup powdered sugar, 8 ounces cream cheese, fresh fruit(kiwi, strawberries, banana)',
                directions: ''
            }
        ]
    )
});




module.exports = recipes