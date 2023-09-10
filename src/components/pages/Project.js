import React from 'react';
import styles from '../pages/styles.module.css'
import project from '../pages/project.module.css'

export default function Projects() {
    const projects = [
        {
        id: 0,
        image: 'src/images/FoodSmart.png',
        title:'FoodSmart',
        getImageUrl: 'https://dtm589.github.io/FoodSmart/',
        repository: 'https://github.com/dtm589/FoodSmart'
     },
     {
        id: 1,
        image: 'src/images/DynamicDishes.png',
        title:'Dynamic Dishes',
        getImageUrl: 'https://dynamic-dishes-3bc984432c37.herokuapp.com/',
        repository: 'https://github.com/jalarcon95/Full-Stack-Project-Dynamic-Dishes'
     },
     {
        id: 2,
        image: 'src/images/MCQ.png',
        title:'Multiple Choice Quiz',
        getImageUrl: 'https://marbfree.github.io/Multiple-Choice-Quiz/',
        repository: 'https://github.com/marbfree/Multiple-Choice-Quiz'
     },
     {
        id: 3,
        image: 'src/images/JATE.png',
        title:'Text Editor',
        getImageUrl: 'https://progressive-text-editor-two-3a84065df07c.herokuapp.com/',
        repository: 'https://github.com/marbfree/PWA-Text-Editor'
     },
     {
        id: 4,
        image: 'src/images/TechBlog.png',
        title:'Tech Blog',
        getImageUrl: 'https://a-blog-for-developers-d8066191be14.herokuapp.com/',
        repository: 'https://github.com/marbfree/Tech-Blog'
     },
     {
        id: 5,
        image: 'src/images/NoteTaker.png',
        title:'Note Taker',
        getImageUrl: 'https://organize-note-05cd8fd11513.herokuapp.com/',
        repository: 'https://github.com/marbfree/Note-Taker'
     },
]

const listItems = projects.map(projects =>
    <li>
      <img
        src={projects.getImageUrl}
        alt={projects.title}
      />
      <p>
        <b>{projects.title}:</b>
        {' ' + projects.link + ' '}
        known for {projects.repository}
      </p>
    </li>
)
  return (
    <body className={project.body}>
    <h1 className={styles.heading}>Projects</h1>
    <ul>{listItems}</ul>;
    </body>
);}
    // return (
    //     <body className={project.body}>
    //         <h1 className={styles.heading}>Projects</h1>
    //         <a href="">
    //             <div className={project.card} style={{width: "18rem"}}>
    //                 <img className="card-img-top" src="" alt="Card image cap"></img>
    //                     <div className="card-body">
    //                         <h5 className={project.cardTitle}>Card Title</h5>
    //                         <div className={project.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
    //                     </div>
    //             </div>
    //         </a>
    //     </body>
    // );

