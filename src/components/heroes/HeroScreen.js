import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleClick = () => {
    if (history.length < 2) {
      history.push("/");
    }
    history.goBack();
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src={`../assets/heroes/${heroId}.jpg`}
            alt=""
            className="img-thumbnail animate__animated animate__fadeInTopLeft"
          />
        </div>
        <div className="col-md-8">
          <h3>{superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Alter ego: </b> {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b> {publisher}
            </li>
            <li className="list-group-item">
              <b>First appereance: </b> {first_appearance}
            </li>
            <li className="list-group-item">
              <b>Characters: </b> {characters}
            </li>
            <li className="list-group-item">
              <button onClick={handleClick} className="btn btn-outline-dark">
                Regresar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
