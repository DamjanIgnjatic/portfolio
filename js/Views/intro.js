class Intro {
  introHeading = document.querySelector(".intro-heading");
  sectionIntro = document.querySelector(".section-intro");
  subtitle = document.querySelector(".subtitle");
  translationValue = 0;
  body = document.querySelector("body");

  intro() {
    const storage = localStorage.getItem("intro");

    if (!storage) {
      this.body.classList.add("disable-scroll");
      setTimeout(() => {
        this.introHeading.style.opacity = 1;
        this.introHeading.style.transform = `translateX(${this.translationValue}px)`;
      }, 800);

      setTimeout(() => {
        this.subtitle.style.opacity = 1;
        this.subtitle.style.transform = `translateX(${this.translationValue}px)`;
      }, 1300);

      setTimeout(() => {
        this.body.classList.add("intro-animation");
      }, 4500);

      setTimeout(() => {
        this.body.classList.remove("disable-scroll");
        this.body.classList.remove("intro-animation");
        this.body.classList.add("enable-scroll");
      }, 6500);
    } else {
      this.sectionIntro.style.display = "none";
    }
  }

  constructor() {
    this.intro();
  }
}

export default new Intro();
