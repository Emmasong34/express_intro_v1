console.log('hello from js');

$(document).ready(onReady);

function onReady(){
    //perform GET request
    getRandomQuote();
    $('#submit').on('click', submitQuote);
}

function submitQuote(){
    let quote = $('#quote').val();
    //select quote .val gets
    let author = $('#author').val();
    console.log('clicked', quote, author);
    //send data to server via post request
    $.ajax({
        method: 'POST',
        url: '/submitQuotes'
        data: {
            quote: quote,
            author: author
        }
    }).then(function(response){
        console.log('response', response);
    }).catch(function(error){
        //notifying the user of an error in post request
        alert(error);
    });
}

function getRandomQuote(){
    console.log('get the quote');
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){
        console.log('response', response);
        appendToDom(response);
    });
}

function appendToDom(dataToAppend){
    //take response from server
    //append to div id="output"
    $('#output').append(`
        <p>${dataToAppend.quote}</p>
        <i>${dataToAppend.author}</i>
    `)
}