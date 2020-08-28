import React from 'react';
import Common from './Common';
import elephant from '../images/Elephant.png';

const Services = () => {
    return (<>
        <Common
            headerMsg={"At your service is the hovering "}
            strongName={"elephant."}
            btnName={"Know More"}
            btnLink={"/about"}
            img={elephant}
        />
    </>)
}

export default Services;
