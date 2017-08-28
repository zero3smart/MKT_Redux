import React from 'react';
import '../assets/stylesheets/components/NavigationBar.scss';
import avatar from '../assets/images/character.png';
import { Link, IndexLink } from 'react-router';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="">
        <div className="Line">
        </div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="Genetic-testing-mark">
            <span>Genetic testing market landscape&nbsp;</span>
            <span className="text-style-1">Where players are located</span>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <IndexLink to="/explore" activeClassName="active" className="nav-link">
                  <span className="separator">Explorer</span> <span className="sr-only">(current)</span>
                </IndexLink>
              </li>
              <li className="nav-item">
                <IndexLink to="/about" activeClassName="active" className="nav-link">
                  <span className="separator">About</span>
                </IndexLink>
              </li>
              <li className="nav-item">
                <IndexLink to="/help" activeClassName="active" className="nav-link">
                  <span className="separator">How does this work</span>
                </IndexLink>
              </li>
            </ul>
            <ul className="nav navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hi, <b>Alexandra</b>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li>
                <a href="#" className="Bitmap">
                  <img src={avatar} alt="avatar" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;