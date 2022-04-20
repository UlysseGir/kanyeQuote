fetch("https://api.kanye.rest/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.quote)

  })
  .catch((error) => console.log(error));