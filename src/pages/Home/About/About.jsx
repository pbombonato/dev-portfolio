import React from "react";
import AnimatedText from "./AnimatedText";
import DeveloperImage from "./DeveloperImage";
import { QuestionAnswer, PictureAsPdf } from "@mui/icons-material";

function About(props) {
    return (
        <section className="about d-lg-flex justify-content-center align-items-center align-self-center" id="about">
            <div className="container col-11">
                <div className="row py-5 px-lg-4">
                    
                    <div className="col-lg-6 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <AnimatedText />
                            <p >Sou apaixonado por desenvolvimento e gosto de usar a tecnologia para criar soluções eficientes e intuitivas.</p>
                            <div className="mt-4">
                                <a href="/" className="btn mr-lg-2 custom-btn">
                                    <PictureAsPdf />&nbsp; Conheça meu currículo</a>
                                <a href="mailto:pablo.h.bombonato@gmail.com" className="btn custom-btn custom-btn-bg">
                                    Fale comigo</a>
                            </div>
                        </div>
                    </div>

                    <DeveloperImage />

                </div>
            </div>
        </section>
    )
}

export default About    