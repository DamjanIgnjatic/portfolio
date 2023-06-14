import forkifyImage from "../img/forkify-app.png";
import bankistImage from "../img/pr-image.jpg";
import bankistWebImage from "../img/pr-image.jpg";
import omniFoodImage from "../img/omnifood-project.png";

export const state = {
  projects: [
    {
      id: 1,
      title: "Frokify App",
      image: forkifyImage,
      imageAlt: "Forkify App Image",
      description:
        "This web app allows users to search for recipes and add their own recipes. With an intuitive user interface and extensive recipe database, users can easily find and share their favorite dishes.",
      gitUrl: "https://github.com/DamjanIgnjatic/forkify-project",
      webUrl: "https://forkify-project-damjan.netlify.app/",
    },
    {
      id: 2,
      title: "Omnifood",
      image: omniFoodImage,
      imageAlt: "Omnifood Website Image",
      description:
        "This is a single-page website for meal ordering. It allows users to select their preferred meals using an intuitive interface, and then place an order for delivery. The website is designed to be responsive and accessible, ensuring a seamless user experience.",
      gitUrl: "https://github.com/DamjanIgnjatic/omnifood-project",
      webUrl: "https://omnifood-project-damjan.netlify.app/",
    },
    // {
    //   id: 3,
    //   title: "Bankist Website",
    //   image: bankistWebImage,
    //   imageAlt: "Bankist Website Image",
    //   description: "TEST 3",
    //   gitUrl: "https://google.com/",
    //   webUrl: "https://www.youtube.com/",
    // },
    // {
    //   id: 4,
    //   title: "Bankist App",
    //   image: bankistImage,
    //   imageAlt: "Bankist App Image",
    //   description: "TEST 2",
    //   gitUrl: "https://google.com/",
    //   webUrl: "https://www.youtube.com/",
    // },
  ],
};

export const getProjectId = function (id) {
  const project = state.projects.find((project) => project.id === id);

  return project ? project : null;
};
