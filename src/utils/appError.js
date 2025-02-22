import { setState } from "../app.js";
/**
 * @description: add to normal errors the setState({ error: message, currentPage: "error" }) to display the error message
 */

export class AppError extends Error {
  constructor(message) {
    super(message);
    setState({
      error: message,
      currentPage: "error",
    });
  }
}
