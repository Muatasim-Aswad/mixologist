export function createErrorView(message) {
  const errorElement = document.createElement('div');
  errorElement.classList.add('error');

  errorElement.innerHTML = String.raw`
      <p>${message}</p>
  `;

  return errorElement;
}
