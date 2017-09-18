import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse border-radius-none">
            <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand"> <strong> Planner </strong> </Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse pull-right">
                    <ul className="nav navbar-nav">
                      <li> <IndexLink to="/"> Home </IndexLink> </li>
                      <li> <Link to="/tasks"> Tasks </Link></li>
                      <li> <Link to="/notes"> Notes </Link> </li>
                  </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
