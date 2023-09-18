import React from "react";
import styles from "../../components/pages/styles.module.css";
import contact from "../pages/contact.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function handleClick(event) {
    event.preventDefault();
    if (Name != "" && email != "" && message != "") {
      alert("Message Submitted!");
    } else if (Name == "") {
      alert("Please enter a Name");
    } else if (email == "") {
      alert("Please enter a vaild email");
    } else if (message == "") {
      alert("Please enter a Message");
    }
  }
  function handleName(event) {
    setName(event.target.value);
  }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function handleEmail(event) {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else setEmail(event.target.value);
  }
  function handleMessage(event) {
    console.log(event.target.value);
    setMessage(event.target.value);
  }
  return (
    <section className={styles.background}>
      <div className={styles.fadeInHello}>
        <h2 className={styles.title}>Contact</h2>
      </div>
      <div className={contact.text}>Marianna Bruns</div>
      <div className={contact.text}>
        <FontAwesomeIcon icon="fa-solid fa-envelope" /> Email:
        mariannabfree@gmail.com
      </div>
      <div className={contact.text}>
        <FontAwesomeIcon icon="fa-solid fa-phone" /> Phone: (404) 769-8522
      </div>
      <div className="container">
        <form action="mailto:mariannabfree@gmail.com">
          <input className={styles.submit} id="button" type="Submit" value="Send me a Message" ></input>
        </form>
      </div>
    </section>
  );
}
