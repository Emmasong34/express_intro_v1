console.log('hello from js');

$(document).ready(onReady);

function onReady(){
    //perform GET request
    getQuotes();
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
        url: '/submitQuotes',
        data: {
            quote: quote,
            author: author
        }
    }).then(function(response){
        console.log('response', response);
        getQuotes();
        //getting our updated array, saying when ive posted go ahead and get those new quotes
    }).catch(function(error){
        //notifying the user of an error in post request
        alert(error);
    });
}

function getQuotes(){
    console.log('get the quote');
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function(response){
        console.log('response', response);
        appendToDom(response);
    });
}

function appendToDom(dataToAppend){
    $('#output').empty();
    //take response from server
    //append to div id="output"
    for(let i = 0; i < dataToAppend.length; i++){
        $('#output').append(`
            <p>${dataToAppend[i].quote}</p>
            <i>${dataToAppend[i].author}</i>
        `)
    }
}