// Use express library, port 3000
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

// parse application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({ extend: false}));

// parse application/json
app.use(bodyParser.json());

// Get request sends Hello World
app.get('/', (req, res) => {
    res.send('Welcom to Data Representaion & Querying');
})

// Pass url data into page
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

// Get request for api/movies that returns json
app.get('/api/movies', (req, res) => {
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016", "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }];

    res.json({movies:mymovies});
})

// Return index.html to web page
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Grabs values from form
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

// Listening at port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})