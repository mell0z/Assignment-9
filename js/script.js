console.log("script.js loaded");

// Request URL
let endpointBase = "https://api.giphy.com/v1/gifs/search?api_key=mVcNsWoJaxmBAhZ1ueaN2RYvLPhQZQjs&limit=25";

// Where the GIFs will be displayed
let gifContainer = document.querySelector("#gif-container");
// Fetch GIF button
let button = document.querySelector("#fetch-gif-btn");
// Search input field
let searchInput = document.querySelector("#search-input");

button.addEventListener("click", async function () {
    // Gets user input
    let searchTerm = searchInput.value;
    // Updates API endpoint with user input
    let updatedEndpoint = endpointBase + `&q=${searchTerm}`;
    // Fetches data using endpoint
    const response = await fetch(updatedEndpoint);
    const data = await response.json();
    
    let gifs = data.data;
    let images = [];

    for (let i = 0; i < gifs.length; i++) {
        images.push(gifs[i].images.original.url);
    }

    // Displays the GIFs
    gifContainer.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    }
});
