import React from 'react';
import styles from '../pages/styles.module.css'
import project from '../pages/project.module.css'

export default function Projects() {
    return (
        <body className={project.background}>
          <div>
            <h1 className={styles.heading}>Projects</h1>
            <section className="card">
                <div className="card" style={{width: "18rem"}}>
                    <a href="#">
                    <img className="card-img-top" src="" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </a>
                </div>
            </section>
          </div>
        </body>
    );
}

// set up an array of images
// map over images