import React from 'react';
import styles from '../../components/pages/styles.module.css'

export default function Contact() {
  return (
    <section className={styles.background}>
    <div className="container">
    <form action="action_page.php">
  
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
  
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
  
      
  
      <label for="subject">Message</label>
      <textarea id="subject" name="subject" placeholder="Write Message
      " style={{height:'200px'}}></textarea>
  
      <input type="submit" value="Submit"></input>
  
    </form>
  </div>
  </section>
  );
};