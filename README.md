[![Netlify Status](https://api.netlify.com/api/v1/badges/e9fdc983-c34a-4509-9087-888c03764b73/deploy-status)](https://app.netlify.com/sites/your-mixologist/deploys)
![GitHub license](https://img.shields.io/github/license/Muatasim-Aswad/mixologist)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.0-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)

# Mixologist

## Cocktail Recipe Finder Web App

Mixologist is a web application that allows users to search for cocktail recipes. It provides a user-friendly interface where users can enter the name of a cocktail to find its recipe. The app also includes features like a random cocktail generator and the ability to save favorite recipes.

🔗 **Live Demo:** [Mixologist Web App](https://your-mixologist.netlify.app/)

## Table of Contents

- [Features](#features)
- [Technology & Architecture](#technology--architecture)
- [API Used](#api-used)
- [Installation & Setup](#installation--setup)
- [Future Enhancements](#future-enhancements)

## Features

- **Search by cocktail name:** Users can enter the name of a specific cocktail, and the app will display recipes that match the search. The search is flexible and supports partial matches.
- **Recipe details:** Each recipe includes a list of ingredients, instructions, images, and serving suggestions.
- **Random cocktail generator:** Users can discover new cocktails by generating a random recipe.
- **Favorite recipes:** Users can save their favorite recipes for quick access later.

## Technology & Architecture

- **Single Page Application (SPA):** The app is built as a SPA with seamless navigation and fast performance.
- **Folder Structure:** The app follows a modular folder structure where pages and shared components are separated. For each component or page, the logic is kept distinct from the view (HTML/CSS), ensuring maintainability and scalability.
- **Routing & State Management:** Implements custom routing and state management without relying on third-party libraries.
- **HTML, CSS (TailwindCSS), JavaScript:** Used to build a responsive and interactive user interface.
- **Vite:** Utilized for fast builds and efficient development.
- **Netlify:** Deployment and hosting platform.
- **NPM:** Package manager for handling dependencies.

## API Used

The app utilizes the **CocktailDB API** to fetch cocktail recipes. This API provides an extensive collection of cocktail recipes, ingredients, and related details. The API supports CORS and offers a free access key.

## Installation & Setup

To run the project locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/Muatasim-Aswad/mixologist.git
cd mixologist

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Future Enhancements

- **Advanced search options:** Add filters such as category and glass type.
- **Cocktail lists:** Display categorized lists based on preference, ingredients, or type.
- **Social sharing:** Enable users to share favorite recipes on social media.
- **Search autocomplete:** Suggest cocktail names as users type for better user experience.

---

📌 _Contributions are welcome! Feel free to open an issue or submit a pull request._
