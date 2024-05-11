import React from 'react';

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar bg-dark fixed-top border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Wind Typing</span>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Time</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Restart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Restart</a>
              </li>
            </ul>
          </div>
        </nav>


        <nav className="navbar bg-dark fixed-bottom border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Developer</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
