import React from "react";
import Logo from "../../assets/images/white-logo.png";
import Social from "./Social";
import { Copyright } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer pt-5">
      <div className="container-fluid bg-main pt-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center py-4">
            <a href="/" className="my-4">
              <img
                src={Logo}
                alt="Portfolio de Pablo Bombonato"
                style={{ height: "5rem", width: "auto" }}
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div
            className="col-12 d-flex justify-content-center pt-3 text-white"
            style={{ marginBottom: "-.7rem" }}
          >
            <p className="text-white">pablo.h.bombonato@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center text-white">
            <p className="text-white">(16) 9 8828-9579</p>
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
  );
}

export default Footer;
