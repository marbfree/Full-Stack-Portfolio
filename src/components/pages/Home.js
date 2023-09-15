import React from "react";
import styles from "../pages/styles.module.css";

const Home = () => {
  return (
    <div>
      <header className={styles.background}>
        <div className={styles.card}>
          <h2 className={styles.fadeInHello}>Marianna Bruns</h2>
          <h2 className={styles.fadeInHello}>Full Stack Web Developer</h2>
        </div>
      </header>
    </div>
  );
};

export default Home;
