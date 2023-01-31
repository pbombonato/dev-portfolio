import React from "react";
import Carousel from "./Carousel";

function Projects(props) {
    return (
        <section className="project py-5" id="project">
            <div className="container-fluid py-5">    
                <div className="row">
                    <div className="text-center mx-auto mb-5 col-12 ">
                        <h2>Meus projetos recentes
                        </h2>
                    </div>
                </div>
                
                <Carousel />
                
            </div>
        </section>

    )
}

export default Projects