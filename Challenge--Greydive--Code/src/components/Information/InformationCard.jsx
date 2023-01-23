import React from "react";

function InformationCard(props) {
  return (
    <article className="article-item" key={props.id}>
      <h2>
        Nombre:{" "}
        {props.full_name.length > 0
          ? props.full_name[0].toUpperCase() + props.full_name.substring(1)
          : ""}
      </h2>
      <span className="date">Fecha de nacimiento: {props.birth_date}</span>
      <span className="country">
        País:{" "}
        {props.country_of_origin.length > 0
          ? props.country_of_origin[0].toUpperCase() +
            props.country_of_origin.substring(1)
          : ""}
      </span>
      <span className="date">
        Términos y condiciones:
        {props.terms_and_conditions ? " Aceptados" : " Denegados"}
      </span>
      <span className="country">Email: {props.email}</span>
      <div className="clearfix"></div>
    </article>
  );
}

export default InformationCard;
