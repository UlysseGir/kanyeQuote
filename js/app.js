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
                const quote = document.createElement("li");
                quote.className = "quote" ///
                const up = document.createElement("button");
                const down = document.createElement("button");
                quote.textContent = data.quote;
                quotes.appendChild(quote);
                quote.appendChild(up);
                quote.appendChild(down);
                up.textContent = "up";
                down.textContent = "down";
            }
            double.push(data.quote);
    }).catch((error) => console.log(error));  
}

btn.addEventListener("click", function(){
    newQuote();
})