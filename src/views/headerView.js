export function createHeaderView() {
  const header = document.createElement('div');
  header.classList.add('header');

  header.innerHTML = String.raw`
        <div class="header-logo">
            <h1>Mixologist</h1>
        </div>
        <div class='search-bar'>
            <input type="text" id="search-bar" placeholder="Search for a cocktail" />
            <button id="search-button">Search</button>
        </div>
  `;

  return header;
}

//<img src="https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg" alt="logo" />
