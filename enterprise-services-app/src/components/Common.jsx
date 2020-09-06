import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Common extends Component {
    render() {
        const {headerMsg, subMsg, strongName, btnName, btnLink ,img} = this.props;
        return (<>
            <section id="header" className="d-flex align-items-center pt-lg-5" >
                <div className="container-fluid">
                    <div>
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div
                                    className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                                    <h1 className="my-lg-5 ">
                                        {headerMsg} <strong style={{color: '#ff707a'}}> {strongName} </strong> {subMsg}
                                    </h1>
                                    <h4 className="my-lg-5"><strong> ...Shoaib </strong>(Team Jigsaw)</h4>
                                    <div className="my-lg-5">
                                        <NavLink to={btnLink} className="my-3 btn btn-outline-info">{btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="avatar">
                                        <NavLink to="/home">
                                            <div>
                                            <img src={img} alt="home img" className="navbar-nav ml-auto img-thumbnail border-0" />
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>)
    }
}

