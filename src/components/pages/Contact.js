import React from 'react';
import styles from '../../components/pages/styles.module.css'

export default function Contact() {
  return (
    <section className={styles.background}>
    <div className={styles.text}>Marianna Bruns</div>
    <div className={styles.text}>Email: mariannabfree@gmail.com</div>
    <div className={styles.text}>Phone: (404) 769-8522</div>
    <div className="container">
    <form action="action_page.php">
    
    <h2 className={styles.title}>Contact</h2>
      <label for="fname"></label>
      <input style={{marginBottom:"10px", marginRight:"10px", marginTop:"0px"}} type="text" id="fname" name="firstname" placeholder="First Name"></input>
  
      <label for="lname"></label>
      <input type="text" id="lname" name="lastname" placeholder="Last Name"></input>
  
      <label for="subject"></label>
      <textarea id="subject" name="subject" placeholder="Write Message" style={{height:'200px', width: '500px'}}></textarea>
  
      <input className={styles.submit} type="submit" value="Submit"></input>
     
    </form>
  </div>
  </section>
  
  );
};