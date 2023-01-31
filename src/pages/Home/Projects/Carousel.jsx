import React from "react";

import ProjectImage1 from '../../../assets/images/project/project-image01.png'
import ProjectImage2 from '../../../assets/images/project/project-image02.png'
import ProjectImage3 from '../../../assets/images/project/project-image03.png'
import CarouselItem from "./CarouselItem";

function Carousel(props) {
    const carouselArray = [
        {
            title: "FreeToGame Clone",
            image: ProjectImage1,
            link: 'https://github.com/pbombonato/free-to-game-clone',
            customClass: 'active'
        },
        {
            title: 'myTunes Clone',
            link: 'https://github.com/pbombonato/landing-page-mytunes',
            image: ProjectImage3,
        },
        {
            title: 'Simple Flappy Bird using DOM',
            link: 'https://github.com/pbombonato/flappy-bird-dom',
            image: ProjectImage2
        }
    ]

    const carouselElements = carouselArray.map(e => { return ( <CarouselItem {...e} /> ) } )

    return (
        <div className="row justify-content-center pb-5">
            <div className="col-12 col-lg-11">
                <div id="carouselProjects" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselProjects" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselProjects" data-slide-to="1"></li>
                        <li data-target="#carouselProjects" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner shadow-lg">
                        {carouselElements}
                    </div>

                    <a className="carousel-control-prev" href="#carouselProjects" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    
                    <a className="carousel-control-next" href="#carouselProjects" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Próximo</span>
                    </a>
                </div>
            </div>
        </div>        
    )
}

export default Carousel