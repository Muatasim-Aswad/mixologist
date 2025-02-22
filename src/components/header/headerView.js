import { favorites } from "../../models/favorites.js"; // favorites.getLocalStorage().length

export function createHeaderView() {
  const header = document.createElement("div");
  header.classList.add(
    "header",
    "flex",
    "flex-col", // Stack content vertically by default for small screens
    "sm:flex-row", // Row layout on larger screens
    "justify-between",
    "items-center", // Center items horizontally
    "px-6", // Padding for the container
    "py-4", // Vertical padding
    "bg-gradient-to-r", // Soft gradient background
    "from-gray-100", // Gradient starting from a light gray
    "to-gray-300", // Gradient ending with a deeper gray
    "text-black", // Dark text for contrast
    "shadow-lg", // Larger shadow for more depth
    "sticky",
    "top-0",
    "z-10", // Keeps the header on top when scrolling
  );

  header.innerHTML = String.raw`
    <div class="pb-4 sm:pb-0 flex items-center gap-4">
      <!-- Logo -->
      <h1 id="mixologist-logo" class="text-3xl font-bold cursor-pointer">Mixologist</h1>

      <!-- Favorites Icon -->
      <div id="favorites-icon" class="relative cursor-pointer group">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" 
          class="transition-all duration-300 group-hover:text-red-600 group-hover:scale-110 ${favorites.getLocalStorage().length ? "text-red-500" : "text-gray-500"}">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
        <!-- Badge for favorite count -->
        <span id="favorites-count" 
          class="absolute -top-1 -right-2 bg-gray-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-600 transition-all duration-300
          ${favorites.getLocalStorage().length ? "" : "hidden"}">
          ${favorites.getLocalStorage().length}
        </span>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="search-bar flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
      <input type="text" id="search-bar" placeholder="Search for a cocktail" 
          class="border px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4 sm:w-64" />
      <button id="search-button" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none w-auto sm:w-auto">
        Random
      </button>
    </div>
  `;

  return header;
}
