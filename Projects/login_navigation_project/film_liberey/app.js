let apikey = "e4d6f21c";
let btn = document.getElementById('btn');

btn.addEventListener('click', async function () {
    let movie = document.getElementById('input').value.trim(); // Trim whitespace
    let apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&t=${movie}`;
    
    try {
        let result = await fetch(apiUrl);
        let data = await result.json(); // Renamed to 'data' for clarity

        if (data.Response === "True") {
            // Update the container with movie details
            let result3 = document.getElementById('container');
            console.log(result3)
            result3.innerHTML = `
                <h1>${data.Actors}</h1>
                <img src="${data.Poster}" alt="${data.Title} Poster">
            `;
            result3.style.display = 'block'
            document.getElementById('input').value = '';
        } else {
            alert("Movie not found. Please enter a valid movie name.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred. Please try again later.");
    }
});