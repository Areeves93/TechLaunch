// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
const quoteText=document.querySelector('.quoteText')
const quoteAuthor=document.querySelector('.quoteAuthor')
function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json'
    })
    .done(function (response) {
        console.log(response);

        
    })
}


getQuote('')
    quote-box.addEventListener('search',function(event) {
        event.preventDefault()
        if (quote-box.value=="") {
         } return  results.innerHTML='' {
        } 
        
        
    
    })