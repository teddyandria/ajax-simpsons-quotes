// This function loads Simpsons data from the Simpsons API
function fetchSimpsonJSON() {
    // Feel free to download this HTML and edit it, to use another Simpson ID
    const simpsonIndex = [0];
    const url = fetch(`https://simpsons-quotes-api.herokuapp.com/quotes`)
        .then(function (response) {
            return (response.json()); // response.data instead of response.json() with fetch
        })
        .then(function (simpson) {
            console.log(‘data decoded from JSON:‘, simpson);
            // Build a block of HTML
            const simpsonHtml = `
      <h1><strong>${simpson[0].character}</strong></h1>
      <img src=“${simpson[0].image}” />
      <p>${simpson[0].quote}</p>
      `;
            document.querySelector(‘#simpson’).innerHTML = simpsonHtml;
        });
}