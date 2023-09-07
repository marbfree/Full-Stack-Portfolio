import React, {Component} from "react";
import { PortfolioContainer } from "../NavBar/Options";
import '../NavBar/Navigation.css'

class Navbar extends Component {

  render() {
    return(
      <nav className="NavbarOptions">
        <ul style={{listStyleType: "none"}}>
          {PortfolioContainer.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>
            )
          })} 
        </ul>
      </nav>
    )
  }
}

export default Navbar