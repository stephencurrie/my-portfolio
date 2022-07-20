import React from "react";

export default function Portfolio() {
  return (
    <div>
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
                    src="./assets/images/GitHub-Mark-64px.png"
                    className="spacer"
                    height="24px"
                  />
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://stephencurrie.github.io/entertainment-finder/index.html"
                  target="_blank"
                >
                  <img
                    src="./assets/images/entertainmentfinder2.png"
                    alt="Entertainment Finder"
                  />
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
                    src="./assets/images/GitHub-Mark-64px.png"
                    className="spacer"
                    height="24px"
                  />
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://stephencurrie.github.io/hw-6-weather-dashboard/"
                  target="_blank"
                >
                  <img
                    src="./assets/images/weather_screen2.png"
                    alt="Weather Dashboard"
                  />
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
                    src="./assets/images/GitHub-Mark-64px.png"
                    className="spacer"
                    height="24px"
                  />
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://infinite-coast-94356.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src="./assets/images/prioritizer_screen2.png"
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
                Entertainment Finder
                <a
                  href="https://github.com/stephencurrie/entertainment-finder"
                  target="_blank"
                >
                  <img
                    src="./assets/images/GitHub-Mark-64px.png"
                    className="spacer"
                    height="24px"
                  />
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://stephencurrie.github.io/entertainment-finder/index.html"
                  target="_blank"
                >
                  <img
                    src="./assets/images/entertainmentfinder2.png"
                    alt="Entertainment Finder"
                  />
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
                    src="./assets/images/GitHub-Mark-64px.png"
                    className="spacer"
                    height="24px"
                  />
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://stephencurrie.github.io/hw-6-weather-dashboard/"
                  target="_blank"
                >
                  <img
                    src="./assets/images/weather_screen2.png"
                    alt="Weather Dashboard"
                  />
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
                    src="./assets/images/GitHub-Mark-64px.png"
                    className="spacer"
                    height="24px"
                  />
                </a>
              </h5>
              <div className="card-body">
                <a
                  href="https://infinite-coast-94356.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src="./assets/images/prioritizer_screen2.png"
                    alt="Prioritizer"
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
