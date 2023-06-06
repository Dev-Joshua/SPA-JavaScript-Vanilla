const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            Rick and Morty App
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  `;

  return view;
};

export default Header;
