export function createWelcomeView() {
  const welcome = document.createElement('div');
  welcome.classList.add('welcome');

  welcome.innerHTML = String.raw`
        <h1>Welcome to Cocktail Finder!</h1>
  `;

  return welcome;
}
