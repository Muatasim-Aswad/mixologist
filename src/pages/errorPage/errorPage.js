import { createErrorView } from "./errorView.js";
import { errorSelector } from "../../selectors.js";
import { setState } from "../../app.js";

export function createErrorPage() {
  const noResultMessage = `Sorry, we couldn't find any cocktails with that name. Please double-check the spelling and try again.`;
  const failedFetchMessage = `Oops, something went wrong. We couldn't retrieve your favorite cocktail recipe. We're working on it. Please try again later.`;

  let message = "";
  if (errorSelector().includes("Sorry")) message = errorSelector();
  else
    message =
      errorSelector() === "Empty response"
        ? noResultMessage
        : failedFetchMessage;

  setState({ error: null });
  return createErrorView(message);
}
