// Define all the dependencies
const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



// Some routing
app.get('/', function (req, res) {
  res.send('This is Home Page')
})


function isAuthenticated(req, res, next) {
    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    if (req.user)
        return next()

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/login')
}



app.get('/secret_page', isAuthenticated, function (req, res) {
	res.send('look at me!');
})

app.get('/login', function (req, res) {
	res.send('Please login here!')
})


// Run the server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

