const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <a href="#">
          <img src="https://raw.githubusercontent.com/LeonidasEsteban/rick-morty-vanilla/master/static/images/logo%402x.png" alt="" />
        </a>
      </div>
      <div class="Header-nav">
        <button class="switch" id="switch">
          <span><i class="fa-solid fa-sun"></i></span>
          <span><i class="fa-solid fa-moon"></i></span>
        </button>
      </div>
    </div>
  `;

  return view;
};

export default Header;
