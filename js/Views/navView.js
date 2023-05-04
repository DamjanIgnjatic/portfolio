class NavView {
  _btnOpen = document.querySelector(".btn-mobile-nav");
  _btnClose = document.querySelector(".close-nav");
  _allLinks = document.querySelectorAll("a:link");

  mobileNavigationHandler() {
    this._btnOpen.addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("nav-open");
    });
  }

  smoothScrollHandler() {
    this._allLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        if (href === "#") {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }

        if (href !== "#" && href.startsWith("#")) {
          e.preventDefault();
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav-link")) {
          e.preventDefault();
          document.querySelector(".header").classList.toggle("nav-open");
        }
      });
    });
  }

  constructor() {
    this.mobileNavigationHandler();
    this.smoothScrollHandler();
  }
}

export default new NavView();
