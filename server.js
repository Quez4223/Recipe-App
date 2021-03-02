const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')





// CONFIG
const APP = express();
const PORT = 3000;


// MIDDLEWARE
APP.use(methodOverride('_method'));
APP.use(express.urlencoded({ extended: true }));



// DATABASE
mongoose.connect(
    mongodbURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false   
    },
   () => {
       console.log('the connection with mongod is established at', mongodbURI)
   } 
)


// CONTROLLERS
const recipesController = require('./controllers/recipe_controller.js')
APP.use('/recipe', recipesController)


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


// CREATE
APP.post('/recipe', (req, res) => {
    res.send(req.body)
})



// SHOW
APP.get('/recipe/:id', (req,res) => {
    res.render('show.ejs', {
        recipe: recipes[req.params.id]
    });
});









// LISTENER
APP.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
});