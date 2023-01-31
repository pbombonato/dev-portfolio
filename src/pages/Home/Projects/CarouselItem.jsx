import React from "react";

function CarouselItem(props) {
    return (
        <div className={`carousel-item ${props.customClass}`}>
            <a href={props.link} rel="noopener" target='_blank'>
                <img src={props.image} className="d-block w-100" alt={props.title} />
            </a>
        </div>
    )
}

export default CarouselItem