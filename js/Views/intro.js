class Intro {
  introHeading = document.querySelector(".intro-heading");
  sectionIntro = document.querySelector(".section-intro");
  subtitle = document.querySelector(".subtitle");
  introImage = document.querySelector(".intro-image");
  translationValue = 0;
  body = document.querySelector("body");

  clearStorage() {
    let session = sessionStorage.getItem("register");

    if (session == null) {
      localStorage.removeItem("intro");
    }
    sessionStorage.setItem("register", 1);
  }

  intro() {
    const storage = localStorage.getItem("intro");

    if (!storage && !sessionStorage.getItem("reload")) {
      this.body.classList.add("disable-scroll");

      setTimeout(() => {
        this.introHeading.style.opacity = 1;
        this.introHeading.style.transform = `translateX(${this.translationValue}px)`;
      }, 1000);

      setTimeout(() => {
        this.introImage.style.opacity = 1;
        this.introImage.style.transform = `translateX(${this.translationValue}px)`;
      }, 2000);

      setTimeout(() => {
        this.subtitle.style.opacity = 1;
        this.subtitle.style.transform = `translateX(${this.translationValue}px)`;
      }, 3000);

      setTimeout(() => {
        this.body.classList.add("intro-animation");
      }, 5000);

      setTimeout(() => {
        this.body.classList.remove("disable-scroll");
        this.body.classList.remove("intro-animation");
        this.body.classList.add("enable-scroll");
        localStorage.setItem("intro", true);
      }, 7000);
    } else {
      this.sectionIntro.style.display = "none";
    }
  }

  constructor() {
    this.clearStorage();
    this.intro();

    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("reload", true);
    });
  }
}

export default new Intro();
