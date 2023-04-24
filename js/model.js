export const state = {
  projects: [
    {
      id: 1,
      title: "Frokify App",
      image: "../img/pr-image.jpg/",
      imageAlt: "Forkify App Image",
      description: "TEST 1",
      gitUrl: "https://google.com/",
      webUrl: "https://www.youtube.com/",
    },
    {
      id: 2,
      title: "Bankist App",
      image: "../img/pr-image.jpg/",
      imageAlt: "Bankist App Image",
      description: "TEST 2",
      gitUrl: "https://google.com/",
      webUrl: "https://www.youtube.com/",
    },
    {
      id: 3,
      title: "Bankist Website",
      image: "/img/",
      imageAlt: "Bankist Website Image",
      description: "TEST 3",
      gitUrl: "https://google.com/",
      webUrl: "https://www.youtube.com/",
    },
    {
      id: 4,
      title: "Omnifood",
      image: "../img/pr-image.jpg/",
      imageAlt: "Omnifood Website Image",
      description: "TEST 4",
      gitUrl: " https://google.com/",
      webUrl: "https://www.youtube.com/",
    },
  ],
};

export const getProjectId = function (id) {
  const project = state.projects.find((project) => project.id === id);

  return project ? project : null;
};
