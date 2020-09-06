import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const home = '/home';
  const projects = "/projects";
  const services = "/services";
  const contact = "/contact";
  const about = "/about";
  return (
    <>
      <div className="container-fluid fixed-top sticky-top">
        <div className='row'>
          <div className="col-10 mx-auto">
      <nav className="navbar sticky-top navbar-light navbar-expand-lg navbar-light">
        <NavLink exact className="navbar-brand" to="/">LlamaTheNerd</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact activeClassName="menu_active" className="nav-link" to={home}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="menu_active" className="nav-link" to={projects}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="menu_active" className="nav-link" to={services}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="menu_active" className="nav-link" to={contact}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="menu_active" className="nav-link" to={about}>About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</div>

    </>
  )
};

export default Navbar;
