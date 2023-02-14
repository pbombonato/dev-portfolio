import React from "react";

import { Brush, Terminal } from "@mui/icons-material";

import Course from "./Course";

class Curso {
  constructor(
    public readonly icon: JSX.Element,
    public readonly title: string,
    public readonly subtitle: string,
    public readonly contentArray: string[],
    public readonly customClass?: string
  ) {}
}

function Education() {
  const comVisual = new Curso(
    <Brush style={{ fontSize: "3rem" }} />,
    "Técnico em Comunicação Visual",
    "ETEC Polivalente de Americana - 3 semestres",
    [
      "História da Arte",
      "Design Patterns e correntes artísticas",
      "Design Gráfico",
      "Harmonia de cores",
      "Tipografia",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Fotografia",
      "Marketing",
      "Branding",
      "Web design",
      "Design 3d",
      "Edição de vídeos",
    ],
    "border-right"
  );

  const devWeb = new Curso(
    <Terminal style={{ fontSize: "3rem" }} />,
    "Desenvolvimento Web Moderno 2022",
    "Udemy (Cod3r Academy) - 97h, 694 aulas",
    [
      "Lógica de programação",
      "Algoritmos",
      "Javascript iniciante",
      "Javascript intermediário",
      "Javascript avançado",
      "Node",
      "HTML5",
      "CSS3 & CSS Modules",
      "Ajax",
      "Axios",
      "Bootstrap",
      "Gulp",
      "Webpack",
      "React",
    ]
  );

  return (
    <div
      className="container-fluid col-12 pt-0 bg-white"
      style={{ marginBottom: "-14rem" }}
    >
      <div className="row" id="profile">
        <div
          className="col-11 container bg-white rounded-lg shadow-lg mt-5"
          style={{ position: "relative", top: "-22rem" }}
        >
          <div className="row">
            <Course {...comVisual} />
            <Course {...devWeb} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
