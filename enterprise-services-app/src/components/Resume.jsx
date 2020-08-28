import React from 'react';
import resume from '../images/ResumePNG.png';

const Resume = () => {
  return (<>
    <section id="header" className="d-flex align-items-center" >
      <div className="container-fluid">
        <div>
          <div className="col-10 m-md-auto">
            <img src={resume} alt="resume img" className="img-fluid pt-lg-5 resume"/>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default Resume;
