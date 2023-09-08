import React from 'react';
import styles from '../pages/styles.module.css'
import project from '../pages/project.module.css'

export default function Projects() {
    return (
        <body className={styles.backgroundProject}>
          <div>
            <h1 className={project.title}>Projects</h1>
            <section className="card">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src="..." alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </section>
          </div>
        </body>
    );
}