import React from 'react';
import web from "../../src/images/Llama-face/SVG/open-glasses.svg"
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (<>
        <section id="header" className="d-flex align-items-center pt-lg-5">
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                                <h1 className="my-lg-5 ">
                                    Home is where the <strong style={{color: '#ff707a'}}> heart </strong> is...
                                </h1>
                                <h4 className="my-lg-5" ><strong> Shoaib </strong>(Team Jigsaw)</h4>
                                <div className="my-lg-5">
                                    <NavLink to="/projects" className="my-3 btn btn-outline-info"> Learn More </NavLink>
                                </div>
                                </div>
                            <div className="container">
                                <div className="avatar">
                                    <NavLink to="/about">
                                        <img src={web} alt="home img" className="navbar-nav ml-auto"/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
};

export default Home;
