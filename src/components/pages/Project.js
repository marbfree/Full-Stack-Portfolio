import React from 'react';
import styles from '../pages/styles.module.css'
import project from '../pages/project.module.css'

export default function Projects() {
    const projects = [
        {
        id: 0,
        image: 'src/images/FoodSmart.png',
        title:'FoodSmart',
        link: 'https://dtm589.github.io/FoodSmart/',
        repository: 'https://github.com/dtm589/FoodSmart'
     },
     {
        id: 1,
        image: 'src/images/DynamicDishes.png',
        title:'Dynamic Dishes',
        link: 'https://dynamic-dishes-3bc984432c37.herokuapp.com/',
        repository: 'https://github.com/jalarcon95/Full-Stack-Project-Dynamic-Dishes'
     },
     {
        id: 2,
        image: 'src/images/MCQ.png',
        title:'Multiple Choice Quiz',
        link: 'https://marbfree.github.io/Multiple-Choice-Quiz/',
        repository: 'https://github.com/marbfree/Multiple-Choice-Quiz'
     },
     {
        id: 3,
        image: 'src/images/JATE.png',
        title:'Text Editor',
        link: 'https://progressive-text-editor-two-3a84065df07c.herokuapp.com/',
        repository: 'https://github.com/marbfree/PWA-Text-Editor'
     },
     {
        id: 4,
        image: 'src/images/TechBlog.png',
        title:'Tech Blog',
        link: 'https://a-blog-for-developers-d8066191be14.herokuapp.com/',
        repository: 'https://github.com/marbfree/Tech-Blog'
     },
     {
        id: 5,
        image: 'src/images/NoteTaker.png',
        title:'Note Taker',
        link: 'https://organize-note-05cd8fd11513.herokuapp.com/',
        repository: 'https://github.com/marbfree/Note-Taker'
     },

]
    return (
        <body className={project.body}>
            <h1 className={styles.heading}>Projects</h1>
            <a href="">
                <div className={project.card} style={{width: "18rem"}}>
                    <img className="card-img-top" src="" alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className={project.cardTitle}>Card Title</h5>
                            <div className={project.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                        </div>
                </div>
            </a>
        </body>
    );
}

// set up an array of images
// map over images