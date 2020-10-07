console.log('hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('hello from jq');
    //perform GET request
    getRandomQuote();
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