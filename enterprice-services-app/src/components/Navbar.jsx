import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const projects = "/projects";
  const services = "/services";
  const contact = "/contact";
  const about = "/about";
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className='row'>
          <div className="col-10 mx-auto">
      <nav className="navbar navbar-light navbar-expand-lg navbar-light">
        <NavLink exact className="navbar-brand" to="/">LlamaTheNerd</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/*<span className="navbar-toggler-icon"></span>*/}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
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
            {/*<li className="nav-item dropdown">*/}
            {/*  <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"*/}
            {/*     aria-haspopup="true" aria-expanded="false">*/}
            {/*    Dropdown*/}
            {/*  </a>*/}
            {/*  <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
            {/*    <a className="dropdown-item" to="#">Action</a>*/}
            {/*    <a className="dropdown-item" to="#">Another action</a>*/}
            {/*    <div className="dropdown-divider"></div>*/}
            {/*    <a className="dropdown-item" to="#">Something else here</a>*/}
            {/*  </div>*/}
            {/*</li>*/}
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
