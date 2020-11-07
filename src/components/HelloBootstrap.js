import React from "react";

function HelloBootstrap() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#"></a>
            </li>
          </ul>
        </div>
        <a href="https://www.linkedin.com/in/larramie-shaw-6586171b6/">
          LinkedIn
        </a>
      </nav>
      <div className="jumbotron">
        <h1>Larramie "Doc" Shaw</h1>
        <p>Developer.</p>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">About Me</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Hi, I'm Larramie born and raised in Atlanta, Georgia. Travel,
            Sports, Reading, and Art are some of my hobbies. Always been
            interested in coding finally decided to take a bootcamp.
          </p>
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img
                src={process.env.PUBLIC_URL + "/5.png"}
                className="card-img-top"
                alt="/5"
              ></img>
              <h5 className="card-title">What I'm Craving</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="https://louielover.github.io/project-1/"
                className="btn btn-primary"
              >
                What I'm Craving
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img
                src={process.env.PUBLIC_URL + "/4.png"}
                className="card-img-top"
                alt="/4.png"
              ></img>
              <h5 className="card-title">Eat Some Burgers</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="https://youbettereatsomeburgers.herokuapp.com/"
                className="btn btn-primary"
              >
                Eat Some Burgers
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img
                src={process.env.PUBLIC_URL + "/3.png"}
                className="card-img-top"
                alt="/3.png"
              ></img>
              <h5 className="card-title">Fitness Tracker</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="https://murmuring-dusk-98089.herokuapp.com/?id=5fa21cd5909ee70017122d20"
                className="btn btn-primary"
              >
                Fitness Tracker
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img
                src={process.env.PUBLIC_URL + "/2.png"}
                className="card-img-top"
                alt="/2.png"
              ></img>
              <h5 className="card-title">Budget Tracker</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="https://mighty-woodland-16812.herokuapp.com/"
                className="btn btn-primary"
              >
                Budget Tracker
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img
                src={process.env.PUBLIC_URL + "/one.png"}
                className="card-img-top"
                alt="/one.png"
              ></img>
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a
                href="https://note-taker10-2-2020.herokuapp.com/"
                className="btn btn-primary"
              >
                Note Taker
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
