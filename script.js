function fetchSimpsonsJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const simpsonId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${simpsonId}`;
    axios.get(url)
        .then(function (response) {
            return response.data; // response.data instead of response.json() with fetch
        })
        .then(function (simpson) {
            console.log('data decoded from JSON:', simpson);

            // Build a block of HTML
            const simpsonsHtml = `
          <p><strong>${simpson[0].character}</strong></p>
          <p>${simpson[0].quote}</p>
          <img src="${simpson[0].image}"/>
        `;
            document.querySelector('#simpsons').innerHTML = simpsonsHtml;
        });
}

fetchSimpsonsJSON();