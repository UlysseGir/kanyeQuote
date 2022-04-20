const btn = document.getElementById("btn");
const quotes = document.getElementById("quotes")

function newQuote(){
    fetch("https://api.kanye.rest/")
        .then((response) => response.json())
        .then((data) => {
            const quote = document.createElement("div")
            quotes.appendChild(quote);
            quote.textContent = data.quote;
    }).catch((error) => console.log(error));  
}

btn.addEventListener("click", function(){
    newQuote();
})