import React from "react";
import '../layout/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
    return(
        <>

        <footer className="footer">
            {/* <div style={{color: '#084961'}}>Marianna Bruns</div> */}
            <a href="https://github.com/marbfree">GitHub&#124;
            </a>
            <a href="https://www.linkedin.com/in/mariannabruns/">LinkedIn&#124;
            </a>
            <a href="https://stackoverflow.com/users/22529498/marianna-b">StackOverflow
            </a>
            
        </footer>
        </>
    )
}

export default Footer;