import React, {Component} from 'react';
import Common from "./Common";
import flamingo from "../../src/images/Flamingo.png"
// import butterfly from "../../src/images/butterfly.svg"
// import cutellama from "../../src/images/cute-llama.jpg"
// import ele from "../../src/images/Elephant.png"

export default class About extends Component {
    render() {
        return (<>
            <Common
                headerMsg={"but what about this fancy "}
                strongName={"flamingo?"}
                btnName={"Know More"}
                img={flamingo}
                btnLink={"/"}
            />
        </>)
    }
}
