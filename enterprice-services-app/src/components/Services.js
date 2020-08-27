import React from 'react';
import Common from "./Common";
import butterFly from "../images/butterfly.svg";

const Services = () => {
    return (<>
        <Common
            headerMsg={"At your service is the hovering "}
            strongName={"butterfly."}
            btnName={"Know More"}
            img={butterFly}
        />
    </>)
}

export default Services;
