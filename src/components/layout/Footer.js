import React from "react";
import '../layout/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return(
        <>

        <footer className="footer">
            <div style={{color: '#084961'}}>Marianna Bruns</div>
            <FontAwesomeIcon icon="fa-brands fa-github" />
        </footer>
        </>
    )
}

export default Footer;