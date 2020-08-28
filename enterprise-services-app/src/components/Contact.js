import React from 'react';
import cuteLlama from '../images/cute-llama.jpg';
import Common from './Common';

const Contact = () => {
    return (<>
        <Common
          headerMsg={"Talk to this colorful "}
          strongName={"llama."}
          btnName={"Back to Home"}
          btnLink={"/"}
          img={cuteLlama}
        />
    </>)
}

export default Contact;
