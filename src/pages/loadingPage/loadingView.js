export function createLoadingView() {
  const loadingElement = document.createElement("div");
  loadingElement.classList.add(
    "loading",
    "flex", // Enables centering
    "justify-center", // Centers horizontally
    "items-center", // Centers vertically
    "h-screen", // Full screen height
    "bg-gray-100", // Light background
  );

  loadingElement.innerHTML = String.raw`
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-gray-700 mb-2">Loading</h1>
      <div class="flex space-x-2 justify-center">
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  `;

  return loadingElement;
}
