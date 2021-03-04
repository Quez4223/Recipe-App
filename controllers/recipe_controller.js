const express = require('express')
const Recipe = require('../models/recipe.js')
const recipes = express.Router()


// SEED ROUTE
recipes.get('/seed', (req, res) => {
    Recipe.create(
        [
            {
                name: 'Pasta Aglio e Olio',
                ingredients: 'pasta, parsley, olive oil , 2 cloves garlic, 1 teaspoon red pepper flakes, 1/2 lemon',
                directions: 'Salt large pot of water, bring to a boil. Cook pasta until almost done. Slice garlic cloves thinly and put aside. Chop parsley. Heat olive oil in large saute pan over medium heat. Add garlic stirring constantly, until softened and slightly golden around the edges. Add the red pepper flakes and lower the heat to medium-low. Add pasta, drained, saving some pasta cooking water. Squeeze lemon juice over top and, mix pasta with fresh parsley. Season with salt and pepper. If sauce is too watery, cook for additional 1-3 minutes. ',
                image: 'https://www.vincenzosplate.com/wp-content/uploads/2020/03/spaghetti-aglio-olio-recipe.png'
            },
            {
                name: 'Hawaiian BBQ Quesadilla',
                ingredients: '1 20oz can of Green Jackfruit in brine(or 1lb of chicken breast), flour tortillas burrito size, 1/2 red onion, 1/3 diced pineapple, 3/4 cup of your favorite BBQ sauce, 2 tablespoons lime juice, 2 tablespoons fresh cilantro chopped, salt and pepper to taste, 1/2 teaspoon garlic powder, 1/2 teaspoon onion powder, 1/2 teaspoon chili powder, 8 oz shredded cheese.',
                directions: 'Drain, rinse, and pat Jackfruit dry. Using a fork, shred jackfruit chunks into bite size pieces. Heat a skillet with a light drizzle of oil over medium heat. Add Jackfruit and onion. Cook until fragrant and softened slightly, about 5 mins. Add bbq sauce, chili powder, garlic powder, onion powder, salt and pepper and a little water to the pan. Stir, then cover and let simmer on medium-low heat for 10min.Stir occasionaly. At min 7 add in pineapple and lime juice. Once the 10 min is up set jackfruit mixture aside. Over medium heat, heat a medium pan with a drizzle of oil. Add tortilla, sprinkle cheese and bbq jackfruit and top with another torrilla. Flip the quesadilla and cook for an additional 2 mins or until the cheese is melted and tortilla is a light golden color. Repeat until you have all your desired quesadillas. Cut and garnish with cilantro.',
                image: 'https://3.bp.blogspot.com/-VyrPt-3fBGM/WNANTQm531I/AAAAAAAACxg/NeAM0b3M23YJyPt29wYuM7EYkmK-2rSWgCEw/s1600/IMG_5779%2B%25281%2529.jpg'
            },
            {
                name: 'Paradise French Toast',
                ingredients: '4 thick slices of challah bread, 2 large eggs, 3/4 cup of milk, 1/2 teaspoon vanilla extract, 1/2 teaspoon ground cinnamon, 2 1/2 tablespoons unsalted butter, 1/3 cup powdered sugar, 8 ounces cream cheese, 1 teaspoon of sugar, fresh fruit( strawberries, banana)',
                directions: 'Beat together cream cheese, powdered sugar, and vanilla until you have a spreadable mixture. Spread a thick layer of cream cheese filling on one side of bread. Top with the other bread making a sandwich. Set aside. In a small bowl whisk together eggs, milk and cinnamon and sugar. Heat medium skillet or griddle over a medium heat. Melt the butter. Dip the sandwiches into the egg mixture until fully coated. Cook sandwiches on both sides until golden brown on both sides. Top with strawberries and banana and a sprinkle of powdered sugar. Whipped cream is optional',
                image: 'https://reveillecafe.com/wp-content/uploads/2018/12/xstrawberry-bananna-french-toast.jpg.pagespeed.ic.8CxKGnOzwf.jpg'
            }
        ], (error, recipes) =>{
            res.send(recipes)
        }
    )
});

// INDEX
recipes.get('/', (req, res) => {
    Recipe.find({}, (error, recipes) => {
        res.render('index.ejs', {
            allRecipes: recipes
        });
    })
    
});

// NEW
recipes.get('/new', (req, res) => {
    res.render('new.ejs')
});

// EDIT
recipes.get('/:id/edit', (req, res) => {
    Recipe.findById(req.params.id, (error, foundRecipe) => {
        res.render('edit.ejs', {
            recipe: foundRecipe
        });
    });
});


// DELETE
recipes.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
        res.redirect('/recipe')
    });
});


// Create
recipes.post('/', (req, res) => {
    Recipe.create(req.body, (error, createdRecipe) => {
        res.redirect('/recipe')
    });
});

// SHOW
recipes.get('/:id', (req,res) => {
    Recipe.findById(req.params.id, (error, recipe) => {
        res.render('show.ejs', {
            recipe: recipe
        });
    })
    
});

// UPDATE
recipes.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, 
        req.body, 
        { new: true},
        (error, updatedRecipe) => {
            res.redirect('/recipe')
        }
    )
});









module.exports = recipes