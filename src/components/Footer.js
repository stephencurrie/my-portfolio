import React from "react";
import linkedin from '../images/linkedin-icon.png';
import github from '../images/GitHub-Mark-64px.png';
import twitter from '../images/twitter.png';


function Footer() {
  return (
  <footer>
    <a href="https://www.linkedin.com/in/stephen-currie/" target="_blank"><img src={linkedin}></img></a>
    <a href="https://github.com/stephencurrie" target="_blank"><img src={github}></img></a>
    <a href="https://twitter.com/scurrie" target="_blank"><img src={twitter}></img></a>
  </footer>
  );
}

export default Footer;
