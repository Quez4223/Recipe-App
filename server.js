const express = require('express');
const APP = express();
const PORT = 3000;


// DATA
const recipes = require('./models/recipe');


// Routes
// Index
APP.get('/recipe', (req, res) => {
    res.send(recipes)
})





APP.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
})