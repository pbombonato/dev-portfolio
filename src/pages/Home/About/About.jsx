import React from "react";
import AnimatedText from "./AnimatedText";
import DeveloperImage from "./DeveloperImage";
import { PictureAsPdf } from "@mui/icons-material";

function About(props) {
    const onButtonClick = () => {
        fetch('CV Pablo Bombonato dev frontend.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.target = '_blank'
                alink.download = 'CV Pablo Bombonato dev frontend.pdf';
                alink.click();
            })
        })
    }


    return (
        <section className="about d-lg-flex justify-content-center align-items-center align-self-center" id="about">
            <div className="container col-11">
                <div className="row py-5 px-lg-4">
                    
                    <div className="col-lg-6 col-12 d-flex align-items-center">
                        <div className="about-text">
                            <AnimatedText />
                            <p >Sou apaixonado por desenvolvimento e gosto de usar a tecnologia para criar soluções eficientes e intuitivas.</p>
                            <div className="mt-4">
                                <button className="col-12 col-lg-6 btn mr-lg-2 custom-btn" onClick={onButtonClick}>
                                    <PictureAsPdf />&nbsp; Conheça meu currículo</button>
                                <a href="mailto:pablo.h.bombonato@gmail.com" className="btn col-12 col-lg-4 custom-btn custom-btn-bg">
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