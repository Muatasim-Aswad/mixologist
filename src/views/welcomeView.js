export function createWelcomeView() {
  const welcome = document.createElement('div');
  welcome.classList.add('welcome');

  welcome.innerHTML = String.raw`
        <h3>Welcome to Mixology Magic!</h3>
        <p>
          Discover the art of cocktail making with our extensive collection of recipes. Whether you're a seasoned mixologist or just starting out, we've got something for everyone.<br>
        <p>
          <h4>Search for a Cocktail:</h4> Know what you're looking for? Simply type the name of the cocktail in the search bar and hit enter.<br>
          <h4>Feeling Adventurous?</h4> Click the search button without typing anything to get a <strong>random cocktail</strong> recipe and surprise yourself!<br>
        <br>
        <h3>Cheers to your next great cocktail adventure! 🍹</h3>

  `;

  return welcome;
}
