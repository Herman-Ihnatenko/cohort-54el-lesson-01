const JOKE_CARD = document.querySelector(".joke-card");
const RANDOM_JOKES_URL = "https://official-joke-api.appspot.com/random_joke";
const JOKE = document.querySelector(".jokes");
JOKE_CARD.addEventListener("submit", async (event) => {
  event.preventDefault();
   
  //   console.log("Тут мы оправим запрос на сервер");
  fetch(RANDOM_JOKES_URL, { method: "GET" });
  const response = await fetch(RANDOM_JOKES_URL, { method: "GET" });
  const result = await response.json();
  console.log(result);
  console.log(result.setup);
  console.log(result.punchline);
  if ((response.ok = true)) {
    JOKE.textContent = `${result.setup} ${result.punchline}`;
  } else {
    alert("Sorry, we have some network, please try again!");
  }
});
