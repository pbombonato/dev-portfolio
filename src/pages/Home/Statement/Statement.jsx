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
                        Sou desenvolvedor web frontend jr. e técnico em comunicação visual. Sou apaixonado por programação e as possibilidades que o desenvolvimento nos traz. Acredito em um futuro mais eficiente e confortável, construído a partir da evolução e aplicação da tecnologia, e quero fazer parte desta transformação. Gosto de aprender e aplicar soluções mais eficientes e intuitivas aos meus projetos. Tenho inglês avançado, facilidade de comunicação e de aprendizado e procuro sempre me adaptar às necessidades do projeto e da equipe.
                        </p>
                    </div>
                </div>

            </div>
            <Education />

        </section>
    )
}

export default Statement