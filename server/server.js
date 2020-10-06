const express = require('express');
//require express - gives us a function
//doesnt need a file path if its a node package

const app = express();
//create an instance of express by calling the function
//creating an instance of express and assigning it to app for later use
const port = 5000;
//where this server is going to run on computer

app.use(express.static('server/public'));

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    res.send(quotesData);
});

app.listen(port, () => {
    console.log("up and running on port:", port);
});

