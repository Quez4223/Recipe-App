const express = require('express');
const APP = express();
const PORT = 3000;


// DATA
const recipes = require('./models/recipe');


// ROUTES
// INDEX
APP.get('/recipe', (req, res) => {
    res.render('index.ejs', {
        allRecipes: recipes
    });
});

// NEW
APP.get('/recipe/new', (req, res) => {
    res.render('new.ejs')
});


APP.get('/recipe/:id', (req,res) => {
    res.render('show.ejs', {
        recipe: recipes[req.params.id]
    });
});









// LISTENER
APP.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
});