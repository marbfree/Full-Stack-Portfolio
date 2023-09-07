import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types'
import '../../../App.css'

const Fader = ({text}) => {
    const [fadeProp, setFadeProp] = useState({
        fade:'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade:'fade-out'
                })
            } else {
                setFadeProp({
                    fade:'fade-in'
                })
            }
        }, 4000);

        return () => {}
    }, [])

    return (
    <div className="App FadeProp">
      <header className="App-header">
        <div className="card" style={{color:"#2287ac", padding:"5px 20px"}}>
          <p>Marianna Bruns</p>
          <p>Full Stack Web Developer</p>
        </div>
      </header>
    </div>
    )
}

Fader.defaultProps = {
    text: 'Marianna Bruns'
}
Fader.propTypes = {
    text: PropTypes.string
}

export default Fader