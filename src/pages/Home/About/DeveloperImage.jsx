import React from "react";
import Image from '../../../assets/images/undraw/undraw_programming.svg'

function DeveloperImage(props) {
    return (
        <div className="col-lg-6 col-md-12 col-12">
            <div className="about-image svg">
                <img src={Image} className="img-fluid" alt="Developer image" />
            </div>
        </div>
    )
}

export default DeveloperImage