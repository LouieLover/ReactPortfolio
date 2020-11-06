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
                <a className="dropdown-item" href="#">
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
      </nav>
      <div className="jumbotron">
        <h1>Larramie "Doc" Shaw</h1>
        <p>Developer.</p>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            Non eu sit duis adipisicing esse incididunt ad proident.
          </h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco.
            Commodo magna eu ex mollit sunt amet fugiat. In irure eu enim id ea
            sit nostrud incididunt ad adipisicing.Aliquip dolore commodo nostrud
            minim. Cillum do enim non ullamco. Commodo magna eu ex mollit sunt
            amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
            adipisicing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
