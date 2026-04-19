console.log("script.js loaded");

// Request URL
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=mVcNsWoJaxmBAhZ1ueaN2RYvLPhQZQjs&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getGifs() {
    // Sends request to Giphy API
    const response = await fetch(endpoint);
    // converts response to JSON
    const data = await response.json();
    // outputs the data to the console
    console.log(data);
}

// test
getGifs(); 