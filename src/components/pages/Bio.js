import React from 'react';
import '../pages/Bio.css'
import logo from '../../../src/images/Headshot.jpeg'

export default function Bio() {
  return (
    <body>
    <div>
      <h1>Bio</h1>
      <div className="card mb-3 rounded-circle ml-5" style={{maxWidth: '500px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={logo} className="img-fluid rounded-circle" alt="Headshot of Marianna Bruns"></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Marianna Bruns</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    </body>
  );
}