import React from "react";
import entertainmentFinder from '../../images/entertainmentfinder2.png';
import weatherDash from '../../images/weather_screen2.png';
import proritizer from '../../images/prioritizer_screen2.png';
import dayPlanner from '../../images/workdayscreen.png';
import textEditor from '../../images/JATE_screen.png';
import techBlog from '../../images/techblogscreen.png';
import github from '../../images/GitHub-Mark-64px.png';

export default function Portfolio() {
  return (
    <div className="content">
      <h1>Portfolio</h1>
      <section className="containerfluid" id="applications">
        <div className="w3-bar w3-blue"></div>

        <div className="row">
          <div className="col-md-12 h3space">
            <h3>Sample Web Applications</h3>
          </div>
        </div>

        <div className="row apps h3space">
          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">
                Entertainment Finder
                <a
                  href="https://github.com/stephencurrie/entertainment-finder"
                  target="_blank"
                >
                  <img
                    src={github}
                    className="spacer"
                    height="24px"></img>

                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://stephencurrie.github.io/entertainment-finder/index.html"
                  target="_blank"
                >
                  <img
                    src={entertainmentFinder}
                    alt="Entertainment Finder"
                  ></img>
                </a>
              </div>
              <p className="small">(Click image to go to application)</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">
                Weather Dashboard
                <a
                  href="https://github.com/stephencurrie/hw-6-weather-dashboard"
                  target="_blank"
                >
                  <img
                    src={github}
                    className="spacer"
                    height="24px"></img>
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://stephencurrie.github.io/hw-6-weather-dashboard/"
                  target="_blank"
                >
                  <img
                    src={weatherDash}
                    alt="Weather Dashboard"
                  ></img>
                </a>
              </div>
              <p className="small">(Click image to go to application)</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">
                The Prioritizer
                <a
                  href="https://github.com/mdschenck/Prioritizer"
                  target="_blank"
                >
                  <img
                    src={github}
                    className="spacer"
                    height="24px"></img>
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://infinite-coast-94356.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={proritizer}
                    alt="Prioritizer"
                  />
                </a>
              </div>
              <p className="small">(Click image to go to application)</p>
            </div>
          </div>
        </div>
        <p></p>
        <div className="row apps h3space">
          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">
                Day Planner
                <a
                  href="https://github.com/stephencurrie/hw-5-day-planner"
                  target="_blank"
                >
                  <img
                    src={github}
                    className="spacer"
                    height="24px"></img>
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://stephencurrie.github.io/hw-5-day-planner/"
                  target="_blank"
                >
                  <img
                    src={dayPlanner}
                    alt="Day Planner"
                  />
                </a>
              </div>
              <p className="small">(Click image to go to application)</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">
                Text Editor
                <a
                  href="https://github.com/stephencurrie/pwa-text-editor"
                  target="_blank"
                >
                  <img
                    src={github}
                    className="spacer"
                    height="24px"></img>
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://classique-chaise-41102.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={textEditor}
                    alt="Text Editor"
                  ></img>
                </a>
              </div>
              <p className="small">(Click image to go to application)</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">
                Tech Blog
                <a
                  href="https://github.com/stephencurrie/tech-blog"
                  target="_blank"
                >
                  <img
                    src={github}
                    className="spacer"
                    height="24px"></img>
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://fathomless-wave-42828.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src={techBlog}
                    alt="Tech Blog"
                  />
                </a>
              </div>
              <p className="small">(Click image to go to application)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
