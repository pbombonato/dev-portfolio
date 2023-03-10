import React from "react";
import Avatar from "@mui/material/Avatar";

type Props = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  contentArray: string[];
  customClass?: string;
};

function Course(props: Props) {
  return (
    <div className={`col-12 col-lg text-center py-5 ${props.customClass} `}>
      <Avatar
        style={{
          backgroundColor: "var(--custom-green)",
          width: "5rem",
          height: "5rem",
          color: "#000",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {props.icon}
      </Avatar>

      <h4 className="mt-5">{props.title}</h4>

      <p>{props.subtitle}</p>

      <h5
        className="mt-5 mb-3"
        style={{ color: "var(--main-color)", fontWeight: "bold" }}
      >
        Conteúdos abordados
      </h5>

      <ul>
        {props.contentArray.map((e, i) => {
          return (
            <li key={i}>
              <p>{e}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Course;
