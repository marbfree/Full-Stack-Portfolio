import React from 'react';
import '../pages/Bio.css'
import logo from '../../../src/images/Headshot.jpeg'

export default function Bio() {
  return (
    <body>
    <div>
      <h1>Bio</h1>
      <div className="" style={{maxWidth: '500px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={logo} className="img-fluid rounded-circle" alt="Headshot of Marianna Bruns"></img>
    </div>
    <div className="col-md-8">
      <div className="body" style={{color: "#2287ac"}}>
        <h5 style={{fontSize: '2em'}}>Marianna Bruns</h5>
        <p>Versatile Full Stack Web Developer merging skills in web development and psychology. Adept at managing the entire development lifecycle while leveraging analytics from psychology to enhance user experiences. Committed to innovation, collaboration, and mastering emerging technologies.   Encouraging creative solutions to challenges utilizing research and development and over 10 years of management experience.</p>
      </div>
    </div>
  </div>
</div>
    </div>
    </body>
  );
}