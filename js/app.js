const btn = document.getElementById("btn");
const quotes = document.getElementById("quotes")
let double = [];

function newQuote(){
    fetch("https://api.kanye.rest/")
        .then((response) => response.json())
        .then((data) => {
            if(double.includes(data.quote)){
                newQuote();
            } else {
                const quote = document.createElement("div")
                quotes.appendChild(quote);
                quote.textContent = data.quote;
            }
            double.push(data.quote);
    }).catch((error) => console.log(error));  
}

btn.addEventListener("click", function(){
    newQuote();
})