import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { UseForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleChange] = UseForm({ search: q });
  const { search } = values;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };
  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  return (
    <div className="container">
      <h2>Search Screen</h2>
      <hr />
      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              name="search"
              value={search}
              className="form-control"
              autoComplete="off"
              onChange={handleChange}
            />
            <button className=" btn btn-block btn-primary mt-4" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h2> Results</h2>
          {q === "" && (
            <div className="alert alert-info animate__animated animate__bounce">
              Search a hero
            </div>
          )}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger animate__animated animate__bounce">
              Hero not found q={q}
            </div>
          )}
          {heroesFiltered.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};
