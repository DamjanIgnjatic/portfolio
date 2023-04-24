class NavView {
  _btnOpen = document.querySelector(".btn-mobile-nav");
  _btnClose = document.querySelector(".close-nav");
  _allLinks = document.querySelectorAll(".main-nav-link:link");

  mobileNavigationHandler() {
    this._btnOpen.addEventListener("click", function () {
      document.querySelector(".header").classList.toggle("nav-open");
    });
  }

  smoothScrollHandler() {
    this._allLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const href = link.getAttribute("href");
        console.log(href);

        if (href === "#")
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav-link"))
          document.querySelector(".header").classList.toggle("nav-open");
      });
    });
  }

  constructor() {
    this.mobileNavigationHandler();
    this.smoothScrollHandler();
  }
}

export default new NavView();
