import { pages } from "../pages/index.js";
import { currentPageSelector } from "../State/selectors.js";
import { AppError } from "../utils/appError.js";

export function renderPage() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const page = pages[currentPageSelector()]();
  main.appendChild(page);
}

export function renderWithoutUrl(cases) {
  // check if not array
  if (!Array.isArray(cases))
    throw new AppError("rendering pages with no url cases must be an array");

  return () => {
    if (cases.includes(currentPageSelector())) renderPage();
  };
}
