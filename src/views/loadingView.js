export function createLoadingView() {
  const loadingElement = document.createElement('div');
  loadingElement.classList.add('loading');

  loadingElement.innerHTML = String.raw`
      <h1 class='loading-text'>Loading</h1>
  `;

  return loadingElement;
}
