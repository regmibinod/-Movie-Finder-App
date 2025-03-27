
const url = `https://www.omdbapi.com/?t=Nepal&apikey=a96a34cc`;
const inputMoiveName = document.querySelector("input");
const postContainer = document.querySelector(".poster");
const button = document.querySelector("button");
async function findMovie() {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${inputMoiveName.value}&apikey=a96a34cc`
  );
  const data = await response.json();
if(data.Response === "False"){
    postContainer.innerHTML = `<p style="color: red;">Movie not found! Please try again.</p>`;
    return;
}
  postContainer.innerHTML = ` <img src="${data.Poster}" alt="Movie Poster" />
      <div class="details">
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Country:</strong>${data.Country}/p>
        <p class="rating">IMDb Rating: ${data.imdbRating}</p>
        <p>
          <strong>Plot:</strong> ${data.Plot}
        </p>
      </div>`;
}

// findMovie()

button.addEventListener("click", function (e) {
  e.preventDefault();
  if(inputMoiveName.value === ""){
    alert("Please enter a movie name")
  }else{
    findMovie();
  }
  inputMoiveName.value = "";

});
inputMoiveName.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    if(inputMoiveName.value === ""){
        alert("Please enter a movie name")
      }else{
        findMovie();
      }
      inputMoiveName.value = "";
  }

});
