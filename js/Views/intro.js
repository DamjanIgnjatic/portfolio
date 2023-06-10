class Intro {
  introHeading = document.querySelector(".intro-heading");
  sectionIntro = document.querySelector(".section-intro");
  subtitle = document.querySelector(".subtitle");
  introImage = document.querySelector(".intro-image");
  translationValue = 0;
  body = document.querySelector("body");

  intro() {
    const storage = localStorage.getItem("intro");

    if (!storage) {
      this.body.classList.add("disable-scroll");

      this.introHeading.style.opacity = 1;
      this.introHeading.style.transform = `translateX(${this.translationValue}px)`;

      setTimeout(() => {
        this.introImage.style.opacity = 1;
        this.introImage.style.transform = `translateX(${this.translationValue}px)`;
      }, 1000);

      setTimeout(() => {
        this.subtitle.style.opacity = 1;
        this.subtitle.style.transform = `translateX(${this.translationValue}px)`;
      }, 2000);

      setTimeout(() => {
        this.body.classList.add("intro-animation");
      }, 4500);

      setTimeout(() => {
        this.body.classList.remove("disable-scroll");
        this.body.classList.remove("intro-animation");
        this.body.classList.add("enable-scroll");
        localStorage.setItem("intro", true);
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
