const express = require('express');
const bodyParser = require('body-parser');
//require express - gives us a function
//doesnt need a file path if its a node package

const app = express();
//create an instance of express by calling the function
//creating an instance of express and assigning it to app for later use
const port = 5000;
//where this server is going to run on computer

const quotesData = require ('./modules/quotes.js');
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    res.send(quotesData);
});


app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandomInt(quotesData.list.length);
    res.send(quotesData.list[randomNumber]);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



  app.post('/submitQuotes', (req, res) => {
      console.log('hello from post', req.body);
      quotesData.list.push(req.body);
        res.sendStatus(200);
        
  });


  app.listen(port, () => {
    console.log("up and running on port:", port);
});