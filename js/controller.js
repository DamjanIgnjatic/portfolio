import "core-js";
import * as model from "./model";
import projectView from "./Views/projectView";
import modalView from "./Views/modalView";
import navView from "./Views/navView";
import intro from "./Views/intro";

const controlProject = function () {
  projectView.render(model.state.projects);
};

const controlModal = function (id) {
  modalView.render(model.getProjectId(id));
};

const init = function () {
  projectView.addHandlerRedner(controlProject);
  projectView.addHandlerClick(controlModal);
};

init();
