import React from "react";
import entertainmentFinder from "../../images/entertainmentfinder2.png";
import weatherDash from "../../images/weather_screen2.png";
import proritizer from "../../images/prioritizer_screen2.png";
import dayPlanner from "../../images/workdayscreen.png";
import textEditor from "../../images/JATE_screen.png";
import techBlog from "../../images/techblogscreen.png";
import github from "../../images/GitHub-Mark-64px.png";

export default function Portfolio() {
  return (
    <div className="content">
      <h1>Portfolio</h1>
      <section className="containerfluid" id="applications">
        <div className="row">
          <div className="col-md-12 h3space">
            <h3>Sample Web Applications</h3>
          </div>
        </div>
<div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header d-flex">
              <h5 className="p-2">Entertainment Finder</h5>
              <a
                className="ml-auto p-2"
                href="https://github.com/stephencurrie/entertainment-finder"
                target="_blank"
              >
                <img src={github} className="spacer" height="24px"></img>
              </a>
            </div>
            <div className="card-body text-center">
              <a
                href="https://stephencurrie.github.io/entertainment-finder/index.html"
                target="_blank"
              >
                <img src={entertainmentFinder} alt="Entertainment Finder"></img>
              </a>
              <p className="small">(Click image to go to application)</p>
            </div>
          </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header d-flex">
                <h5 className="p-2">Weather Dashboard</h5>
                <a
                  className="ml-auto p-2"
                  href="https://github.com/stephencurrie/hw-6-weather-dashboard"
                  target="_blank"
                >
                  <img src={github} className="spacer" height="24px"></img>
                </a>
              </div>

              <div className="card-body text-center">
                <a
                  href="https://stephencurrie.github.io/hw-6-weather-dashboard/"
                  target="_blank"
                >
                  <img src={weatherDash} alt="Weather Dashboard"></img>
                </a>
                <p className="small">(Click image to go to application)</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header d-flex">
                <h5 className="p-2">The Prioritizer</h5>
                <a
                  class="ml-auto p-2"
                  href="https://github.com/mdschenck/Prioritizer"
                  target="_blank"
                >
                  <img src={github} className="spacer" height="24px"></img>
                </a>
              </div>
              <div className="card-body text-center">
                <a
                  href="https://infinite-coast-94356.herokuapp.com/"
                  target="_blank"
                >
                  <img src={proritizer} alt="Prioritizer" />
                </a>
                <p className="small">(Click image to go to application)</p>
              </div>
            </div>
          </div>
</div>

        <p></p>
        <div className="row apps h3space">
        <div className="col-md-4">
            <div className="card">
              <div className="card-header d-flex">
                <h5 className="p-2">Day Planner</h5>
                <a
                  class="ml-auto p-2"
                  href="https://github.com/stephencurrie/hw-5-day-planner"
                  target="_blank"
                >
                  <img src={github} className="spacer" height="24px"></img>
                </a>
              </div>
              <div className="card-body text-center">
                <a
                  href="https://stephencurrie.github.io/hw-5-day-planner/"
                  target="_blank"
                >
                  <img src={dayPlanner} alt="Day Planner" />
                </a>
                <p className="small">(Click image to go to application)</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header d-flex">
                <h5 className="p-2">Text Editor</h5>
                <a
                  class="ml-auto p-2"
                  href="https://github.com/stephencurrie/pwa-text-editor"
                  target="_blank"
                >
                  <img src={github} className="spacer" height="24px"></img>
                </a>
              </div>
              <div className="card-body text-center">
                <a
                  href="https://classique-chaise-41102.herokuapp.com/"
                  target="_blank"
                >
                  <img src={textEditor} alt="Text Editor" />
                </a>
                <p className="small">(Click image to go to application)</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header d-flex">
                <h5 className="p-2">Tech Blog</h5>
                <a
                  class="ml-auto p-2"
                  href="https://github.com/stephencurrie/tech-blog"
                  target="_blank"
                  target="_blank"
                >
                  <img src={github} className="spacer" height="24px"></img>
                </a>
              </div>
              <div className="card-body text-center">
                <a
                  href="https://fathomless-wave-42828.herokuapp.com/"
                  target="_blank"
                >
                  <img src={techBlog} alt="Tech Blog" />
                </a>
                <p className="small">(Click image to go to application)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
