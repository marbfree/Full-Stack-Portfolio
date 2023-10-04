import React from "react";
import styles from "../pages/styles.module.css";
import project from "../pages/project.module.css";
import foodsmart from "../../images/FoodSmart.png";
import dynamic from "../../images/DynamicDishes.png";
import quiz from "../../images/MCQ.png";
import editor from "../../images/JATE.png";
import soul from "../../images/SereneSoul.png";
import tech from "../../images/TechBlog.png";

export default function Projects() {
  const projects = [
    {
      id: 5,
      image: soul,
      title: "Serene Soul",
      url: "https://fast-crag-82231-d0ecbeff422b.herokuapp.com/",
      repository: "https://github.com/ulianaim/mindfulness_app",
    },
    {
      id: 0,
      image: foodsmart,
      title: "FoodSmart",
      url: "https://dtm589.github.io/FoodSmart/",
      repository: "https://github.com/dtm589/FoodSmart",
    },
    {
      id: 1,
      image: dynamic,
      title: "Dynamic Dishes",
      url: "https://dynamic-dishes-3bc984432c37.herokuapp.com/",
      repository:
        "https://github.com/jalarcon95/Full-Stack-Project-Dynamic-Dishes",
    },
    {
      id: 2,
      image: quiz,
      title: "Multiple Choice Quiz",
      url: "https://marbfree.github.io/Multiple-Choice-Quiz/",
      repository: "https://github.com/marbfree/Multiple-Choice-Quiz",
    },
    {
      id: 3,
      image: editor,
      title: "Text Editor",
      url: "https://progressive-text-editor-two-3a84065df07c.herokuapp.com/",
      repository: "https://github.com/marbfree/PWA-Text-Editor",
    },
    {
      id: 4,
      image: tech,
      title: "Tech Blog",
      url: "https://a-blog-for-developers-d8066191be14.herokuapp.com/",
      repository: "https://github.com/marbfree/Tech-Blog",
    },
  ];

  const listItems = projects.map((projects) => (
    <div key={projects.id} className="col mt-5">
      <div className={project.card} style={{ width: "18rem", height: "15rem" }}>
        <div>
          <a href={projects.url}>
            <img
              className="card-img-top"
              style={{ borderRadius: "15px" }}
              src={projects.image}
              alt={projects.title}
            />
          </a>
        </div>
        <div className={project.cardText}>{projects.title}</div>
        <a href={projects.repository}>
          <button>Github</button>
        </a>
      </div>
    </div>
  ));
  return (
    <body className={project.body}>
      <div className={styles.fadeInHello}>
        <h1 className={styles.heading}>Projects</h1>
      </div>
      <div className={project.mkCards}>{listItems}</div>;
    </body>
  );
}
