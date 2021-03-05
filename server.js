const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')





// CONFIG
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI

const APP = express();
const PORT = process.env.PORT;
const db = mongoose.connection;


// MIDDLEWARE
APP.use(express.static('public'));
APP.use(methodOverride('_method'));
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());



//DATABASE
mongoose.connect(MONGODB_URI, { useNewUrlParser: true}, {useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})



// CONTROLLERS
const recipesController = require('./controllers/recipe_controller.js')
APP.use('/recipe', recipesController)




// ROUTE
// localhost:3000
APP.get('/', (req, res) => {
    res.render('home.ejs')
});














// LISTENER
APP.listen(PORT, () => {
    console.log(`listening at ${PORT}`)
});