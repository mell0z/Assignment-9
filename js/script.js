console.log("script.js loaded");

// Request URL
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=mVcNsWoJaxmBAhZ1ueaN2RYvLPhQZQjs&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// Where the GIFs will be displayed
let gifContainer = document.querySelector("#gif-container");
// Fetch GIF button
let button = document.querySelector("#fetch-gif-btn");

async function getGifs() {
    // Sends request to Giphy API
    const response = await fetch(endpoint);
    // converts response to JSON
    const data = await response.json();

    let gifs = data.data; // Array of GIF objects
    let images = [];

    for (let i = 0; i < gifs.length; i++) {
        images.push(gifs[i].images.original.url);
    }

    return images;
}

button.addEventListener("click", async function () {
    // Gets images from API
    let images = await getGifs();
    // Clears old gifs
    gifContainer.innerHTML = "";
    // Loops through the images and displays them
    for (let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    }
});

