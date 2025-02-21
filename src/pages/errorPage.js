import { createErrorView } from "../views/errorView.js";
import { errorSelector } from "../selectors.js";

export function createErrorPage() {
  const noResultMessage = `Sorry, we couldn't find any cocktails with that name. Please double-check the spelling and try again.`;
  const failedFetchMessage = `Oops, something went wrong. We couldn't retrieve your favorite cocktail recipe. We're working on it. Please try again later.`;

  const message =
    errorSelector() === "Empty response" ? noResultMessage : failedFetchMessage;

  return createErrorView(message);
}
