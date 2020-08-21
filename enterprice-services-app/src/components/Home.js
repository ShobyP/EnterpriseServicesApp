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
                            <div className="container">
                                <div className="avatar">
                                    <a href="https://codepen.io/MarioDesigns/">
                                        <img src={web} alt="home img" className="navbar-nav ml-auto"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Home;


/*
*
*
* <div class="container">
	<div class="avatar">
		<a href="https://codepen.io/MarioDesigns/">
			<img src={web} alt="home img" />
		</a>
	</div>
	</div>
*
* */
