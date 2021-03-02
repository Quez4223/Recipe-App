const express = require('express');
const APP = express();
const PORT = 3000;


// DATA
const recipes = require('./models/recipe');


// ROUTES
// INDEX
APP.get('/recipe', (req, res) => {
    res.render('index.ejs')
});

// NEW
APP.get('/recipe/new', (req, res) => {
    res.render('new.ejs')
});









// LISTENER
APP.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
});