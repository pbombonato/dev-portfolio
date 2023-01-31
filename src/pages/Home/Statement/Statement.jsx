import React from "react";
import Education from "./Education";

function Statement(props) {
    return (
        <section 
            id="statement">
            <div 
                className="container-fluid bg-main"
                style={{padding: '5rem 2rem 24rem'}}>
                <div className="row py-4">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <h2 className="text-white text-center">Perfil Profissional e Educação</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 d-flex text-center mt-4">
                        <p className="text-light">
                        Com minha paixão por programação e habilidades técnicas aperfeiçoadas através de projetos próprios e aprendizado constante, estou preparado para contribuir com sua equipe de desenvolvimento e colaborar em projetos desafiadores, além de estar sempre disposto a aprender e me adaptar às necessidades do projeto e da equipe.
                        </p>
                    </div>
                </div>

            </div>
            <Education />

        </section>
    )
}

export default Statement