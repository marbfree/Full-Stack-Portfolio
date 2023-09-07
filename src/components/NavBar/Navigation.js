import React, {Component} from "react";
import { Options } from "./Options";
import '../NavBar/Navigation.css'

class Navbar extends Component {
  render(){
    return (
      <nav className="NavbarOptions">
        <ul style={{listStyleType: "none"}}>
          {Options.map((item, index) => {
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