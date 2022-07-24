import React from 'react';
import headShot from '../../images/SC_Synoptek4.png';

export default function About() {
  return (
    <div className="content">
      <h1>About Me</h1>
      <div className="row">
          <div className="col-md-3">
            <img className="setwidth" src={headShot} alt="Profile"></img>
          </div>
          <div className="col-md-9">
            <h2>Stephen Currie</h2>
            <p>I am a technology leader with extensive experience in Cloud Hosting, Networking, Security, Application Management, Workforce Productivity, Full-stack Web Development, Global Operations, and IT Service Management.
            </p>
            <p>
            I create high-performing teams, cross-functional partnerships, and establish clarity in complex environments. I am growth-oriented and understand how to use technology to achieve business results. 
            </p>
            <p>
            I operate in both the "business to business" as well as the consumer space.
            </p>
          </div>
        </div>
    </div>
  );
}
