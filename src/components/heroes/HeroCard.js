import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card  animate__animated animate__fadeIn">
      <div
        className="row no-gutters align-items-center"
        style={{ minHeight: "300px" }}
      >
        <div className="col-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            alt={id}
            className="card-img"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <div className="card-title">{superhero}</div>
            <div className="card-text">{first_appearance}</div>
            {alter_ego !== characters ? (
              <div className="card-text"> {alter_ego} </div>
            ) : null}
            <div className="text-muted">{characters}</div>
            <div className="badge badge-success">{publisher}</div>
          </div>
          <Link className="ml-3" to={`./hero/${id}`}>
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
