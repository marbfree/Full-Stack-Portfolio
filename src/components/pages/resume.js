import React from "react";
import styles from '../pages/styles.module.css'
import resume from './resume.module.css'


const Resume = () => {
  return (
    <body className={resume.background}>
      <div>
      <div className={styles.fadeInHello}><h2 className={styles.heading} style={{ color: "#eea6be" }}>Resume</h2></div>
        <button className={resume.button}>
        <a style={{color: "#eea6be", padding: "20px"}} href="https://drive.google.com/file/d/1kyOi_dkdDrqdE_uGKaNuUpF9kVSt-0Gn/view?usp=sharing" download="Marianna Bruns Resume">Download Resume</a>
        </button>
        <div className="container">
          <p className={resume.text}>HTML | CSS | JavaScript | jQuery | node.js | express.js | mySQL | mongoDB | React | Debugging | Microsoft Word | Excel | Powerpoint | Zoom | Slack
          </p>
        </div>
      </div>
    </body>
  )
}

export default Resume