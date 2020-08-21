import React from 'react';
import web from "../../src/images/Llama-face/SVG/open-glasses.svg"

const Home = () => {
    return (<>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1 className="my-lg-5">
                                    Home is where the <strong style={{color: '#ff707a'}}> heart </strong> is...
                                    and also from where I <strong style={{color:'#ff707a'}}>work</strong> from.
                                </h1>
                                <h4 className="my-lg-5" >...<strong> Shoaib </strong>(Team Jigsaw)</h4>
                                <div className="my-lg-5">
                                    <a href="" className="my-3 btn btn-outline-info"> Learn More </a>
                                </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="figure-img img-fluid rounded" alt="home img"/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>)
}

export default Home;

