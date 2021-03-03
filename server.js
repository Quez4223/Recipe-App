const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')





// CONFIG
require('dotenv').config()


const APP = express();
const PORT = 3000;


// MIDDLEWARE
APP.use(methodOverride('_method'));
APP.use(express.urlencoded({ extended: true }));



//DATABASE
mongoose.connect('mongodb://localhost:27017/recipe', { useNewUrlParser: true}, {useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})



// CONTROLLERS
const recipesController = require('./controllers/recipe_controller.js')
APP.use('/recipe', recipesController)



















// LISTENER
APP.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
});