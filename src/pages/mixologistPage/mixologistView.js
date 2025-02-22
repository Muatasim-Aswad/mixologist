export function createMixologistView() {
  const welcome = document.createElement("div");
  welcome.classList.add(
    "welcome",
    "max-w-2xl", // Limits width for better readability
    "mx-auto", // Centers content
    "text-center", // Aligns text in the center
    "bg-white", // Clean background
    "shadow-md", // Subtle shadow for a floating effect
    "sm:rounded-lg", // Soft rounded corners
    "p-6", // Inner spacing
    "sm:mt-10", // Pushes down slightly
    "sm:border", // Light border for separation
    "border-gray-200",
  );

  welcome.innerHTML = String.raw`
    <h3 class="text-3xl font-bold text-blue-600 mb-4">Welcome to Mixology Magic!</h3>
    <p class="text-gray-700 leading-relaxed">
      Discover the art of cocktail making with our extensive collection of recipes. 
      Whether you're a seasoned mixologist or just starting out, we've got something for everyone.
    </p>
    
    <div class="mt-6">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Search for a Cocktail:</h4>
      <p class="text-gray-600">
        Know what you're looking for? Simply type the name of the cocktail in the search bar and hit enter.
      </p>
    </div>

    <div class="mt-6">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Feeling Adventurous?</h4>
      <p class="text-gray-600">
        Click the random button above without typing anything to get a 
        <strong class="text-green-600">random cocktail</strong> recipe and surprise yourself!
      </p>
    </div>

    <div class="mt-6">
      <h4 class="text-xl font-semibold text-gray-800 mb-2">Favorite Cocktails:</h4>
      <p class="text-gray-600">
        Found a cocktail you love? Click the heart icon next to it to add it to your <strong class="text-pink-600">favorites</strong> for easy access later!
      </p>
    </div>

    <h3 class="text-2xl font-bold text-pink-500 mt-6">Cheers to your next great cocktail adventure! 🍹</h3>
  `;

  return welcome;
}
