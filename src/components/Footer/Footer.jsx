import React from "react";
import Logo from '../../assets/images/white-logo.png'
import Social from "./Social";
import { Copyright } from "@mui/icons-material";


function Footer(props) {
    

    return (
        <footer className="footer pt-5">
            <div className="container-fluid bg-main pt-5">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center pt-3">
                        <a href='/' className="my-4">
                            <img src={Logo} alt="Portfolio de Pablo Bombonato" style={{height:'5rem', width: 'auto'}} />
                        </a>
                    </div>
                </div>

                <Social />

                <div className="row pb-4">
                    <div className="col-12">                                
                        <p className="text-center text-white">
                            Desenvolvido por <Copyright /> <b>Pablo Bombonato</b>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer