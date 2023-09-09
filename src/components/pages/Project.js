import React from 'react';
import styles from '../pages/styles.module.css'
import project from '../pages/project.module.css'

export default function Projects() {
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