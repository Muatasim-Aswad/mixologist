import { pages } from "../pages/index.js";
import { currentPageSelector } from "../selectors.js";

export function renderPage() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const page = pages[currentPageSelector()]();
  main.appendChild(page);
}

export function renderWithoutUrl(cases) {
  // check if not array
  if (!Array.isArray(cases))
    throw new Error("rendering pages with no url cases must be an array");

  return () => {
    if (cases.includes(currentPageSelector())) renderPage();
  };
}
