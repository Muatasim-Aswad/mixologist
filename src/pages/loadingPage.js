import { createLoadingView } from '../views/loadingView.js';
import { state } from '../app.js';

let loadingInterval;

export function createLoadingPage() {
  const loadingPage = createLoadingView();

  loadingInterval = setInterval(() => {
    updateLoadingText(loadingPage);
  }, 500);

  return loadingPage;
}

function updateLoadingText(loadingPage) {
  const loadingText = loadingPage.querySelector('.loading-text');
  const currentText = loadingText.textContent;

  if (currentText.endsWith('...')) {
    loadingText.textContent = 'Loading';
  } else {
    loadingText.textContent += '.';
  }

  if (state.loading === false) {
    clearInterval(loadingInterval);
  }
}
