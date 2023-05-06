import iconWeb from "../../img/www.png";
import gitIcon from "../../img/GitHub.png";

class ModalView {
  _parentElement = document.querySelector(".modal");
  _modal = document.querySelector(".modal");
  _overlay = document.querySelector(".overlay");
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

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _addHandlerCloseModal() {
    this._modal.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }

  _closeModal() {
    this._overlay.addEventListener(
      "click",
      this._addHandlerCloseModal.bind(this)
    );
  }

  _addHandlerCloseModalKey() {
    document.addEventListener(
      "keydown",
      function (e) {
        if (e.key === "Escape" && !this._modal.classList.contains("hidden"))
          this._addHandlerCloseModal();
      }.bind(this)
    );
  }

  constructor() {
    this._closeModal();
    this._addHandlerCloseModalKey();
  }

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
  //     closeModal();
  //   }
  // });

  _generateMarkup() {
    return `
       <div class="modal-content" data-id=${this._data.id}>
          <div class="modal-header">
            <img src="${this._data.image}" />
          </div>

          <div class="modal-description">
            <div class="description">
              <p class="project-title">${this._data.title}</p>
                <p class="project-description">
                ${this._data.description}
                </p>
            </div>

          <div class="project-links">
            <a class="project-link" href=${this._data.gitUrl} target="_blank">
              <img src=${gitIcon} alt="GitHub Icon"/>
              <p>Repository</p>
            </a>
          
         
            <a class="project-link" href=${this._data.webUrl} target="_blank">  
              <img src=${iconWeb} alt="Web Icon" />
              <p>Demo</p>
            </a>
          </div>
        </div>
      </div>
      
      `;
  }
}

export default new ModalView();
