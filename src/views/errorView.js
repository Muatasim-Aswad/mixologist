export function createErrorView(message) {
  const errorElement = document.createElement("div");
  errorElement.classList.add(
    "error",
    "bg-red-500", // Red background for errors
    "text-white", // White text
    "mx-4",
    "p-4", // Padding
    "rounded-lg", // Rounded corners
    "max-w-2xl", // Max width for readability
    "sm:mx-auto", // Centers the element
    "my-6", // Margin for spacing
    "shadow-md", // Subtle shadow for depth
    "text-center", // Centers text
  );

  errorElement.innerHTML = String.raw`
    <p class="text-lg font-semibold">${message}</p>
  `;

  return errorElement;
}
