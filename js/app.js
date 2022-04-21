const btn = document.getElementById("btn");
const quotes = document.getElementById("quotes")

const allQuotes = document.getElementsByClassName("quote")


let double = [];

function newQuote(){
    fetch("https://api.kanye.rest/")
        .then((response) => response.json())
        .then((data) => {
            if(double.includes(data.quote)){
                newQuote();
            } else {
                double.push(data.quote);

                const quote = document.createElement("li");
                const up = document.createElement("button");
                const down = document.createElement("button");
                quote.className = "quote";
                quote.textContent = data.quote;
                quotes.appendChild(quote);
                quote.appendChild(up);
                quote.appendChild(down);
                up.className = "up";
                up.textContent = "up";
                down.className = "down";
                down.textContent = "down";

                const btnUps = document.getElementsByClassName("up");
                const btnDowns = document.getElementsByClassName("down");
                const btnUp = btnUps[btnUps.length-1];
                const btnDown = btnDowns[btnDowns.length-1];

                btnUp.addEventListener("click", function(){
                    (btnUp.parentElement).previousElementSibling.insertAdjacentElement("beforebegin", btnUp.parentElement);
                    console.log(btnUp.parentElement)
                })
                
                btnDown.addEventListener("click", function(){
                    (btnDown.parentElement).nextElementSibling.insertAdjacentElement("afterend", btnDown.parentElement);
                    console.log(quote)
                })

            }
            
    }).catch((error) => console.log(error));  
}

btn.addEventListener("click", function(){
    newQuote();
})


// const allbtn = document.get
