import React from 'react';
import styles from '../pages/styles.module.css';
import project from '../pages/project.module.css';
import foodsmart from '../../images/FoodSmart.png';
import dynamic from '../../images/DynamicDishes.png';
import quiz from '../../images/MCQ.png';
import editor from '../../images/JATE.png';
import note from '../../images/NoteTaker.png';
import tech from '../../images/TechBlog.png';

export default function Projects() {
    const projects = [
        {
            id: 0,
            image: foodsmart,
            title: 'FoodSmart',
            url: 'https://dtm589.github.io/FoodSmart/',
            repository: 'https://github.com/dtm589/FoodSmart'
        },
        {
            id: 1,
            image: dynamic,
            title: 'Dynamic Dishes',
            url: 'https://dynamic-dishes-3bc984432c37.herokuapp.com/',
            repository: 'https://github.com/jalarcon95/Full-Stack-Project-Dynamic-Dishes'
        },
        {
            id: 2,
            image: quiz,
            title: 'Multiple Choice Quiz',
            url: 'https://marbfree.github.io/Multiple-Choice-Quiz/',
            repository: 'https://github.com/marbfree/Multiple-Choice-Quiz'
        },
        {
            id: 3,
            image: editor,
            title: 'Text Editor',
            url: 'https://progressive-text-editor-two-3a84065df07c.herokuapp.com/',
            repository: 'https://github.com/marbfree/PWA-Text-Editor'
        },
        {
            id: 4,
            image: tech,
            title: 'Tech Blog',
            url: 'https://a-blog-for-developers-d8066191be14.herokuapp.com/',
            repository: 'https://github.com/marbfree/Tech-Blog'
        },
        {
            id: 5,
            image: note,
            title: 'Note Taker',
            url: 'https://organize-note-05cd8fd11513.herokuapp.com/',
            repository: 'https://github.com/marbfree/Note-Taker'
        },
    ]

    const listItems = projects.map(projects => (
        
          <li key={projects.id}>
            <a href={projects.url}>
            <div>
                <div className={project.card} style={{ width: "18rem" }}>
                    <img src={projects.image} alt={projects.title}></img>
                    <div className="card-body">
                        <div className={project.cardText}>{projects.title}</div>
                        <button onClick={e => projects.repository}>Github</button>
                    </div>
                </div>
            </div>
            </a>
          </li>
        
    ))
    return (
        <body className={project.body}>
            <h1 className={styles.heading}>Projects</h1>
            <ul>{listItems}</ul>;
        </body>
    );
}

