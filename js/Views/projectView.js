import image from "../../img/pr-image.jpg";
import icon from "../../img/icon.png";

class ProjectView {
  _parentElement = document.querySelector(".projects");
  data;

  render(data) {
    console.log(data);
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRedner(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".project");
      if (!btn) return;
      const id = +btn.dataset.projectid;
      document.querySelector(".modal").classList.remove("hidden");
      document.querySelector(".overlay").classList.remove("hidden");
      // document.querySelector("html").style.overflow = "hidden";
      handler(id);
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `
    ${this._data
      .map((project) => {
        return `<div class="project" data-projectid="${project.id}">
      <img
        class="project-image"
        src=${image}
        alt="${project.imageAlt}"
      />
      <div class="project-title-icon">
        <img class="eye-icon" src="${icon}" alt="Eye icon" />
        <p class="project-title">${project.title}</p>
      </div>
    </div>`;
      })
      .join("")}`;
  }
}

export default new ProjectView();