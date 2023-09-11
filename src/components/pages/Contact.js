import React from 'react';
import styles from '../../components/pages/styles.module.css';
import contact from "../pages/contact.module.css";
import {useState} from "react";

export default function Contact() {
    const [Name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleClick(event) {
        event.preventDefault();
        if (Name != "" && email != "" && message != "") {
            alert("Message Submitted!");
        } else if (Name=="") {
            alert("Please enter a Name");
        } else if (email=="") {
            alert("Please enter a vaild email");
        } else if (message=="") {
            alert("Please enter a Message");
        }}
    function handleName(event) {
        console.log(event.target.value)
        setName(event.target.value)
    }
    function handleEmail(event) {
        console.log(event.target.value)
        setEmail(event.target.value)
    }  
    function handleMessage(event) {
        console.log(event.target.value)
        setMessage(event.target.value)
    }
    return (
        <section className={styles.background}>
            <h2 className={styles.title}>Contact</h2>
            <div className={contact.text}>Marianna Bruns</div>
            <div className={contact.text}>Email: mariannabfree@gmail.com</div>
            <div className={contact.text}>Phone: (404) 769-8522</div>
            <div className="container">
                <form action="action_page.php">

                    <label htmlFor="fname"></label>
                    <input onChange={handleName} style={{ marginBottom: "10px", marginRight: "10px", marginTop: "0px" }} type="text" id="fname" name="name" placeholder="Name"></input>

                    <label htmlFor="lname"></label>
                    <input onChange={handleEmail} type="text" id="email" name="email" placeholder="email"></input>

                    <label htmlFor="subject"></label>
                    <textarea onChange={handleMessage} id="subject" name="subject" placeholder="Write Message" style={{ height: '200px', width: '500px' }}></textarea>

                    <input onClick={handleClick} className={styles.submit} type="submit" value="Submit"></input>

                </form>
            </div>
        </section>

    );
};