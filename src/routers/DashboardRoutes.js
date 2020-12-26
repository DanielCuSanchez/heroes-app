import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/hero/:heroId" component={HeroScreen} />
        <Route exact path="/dc" component={DcScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Redirect to="/search" />
      </Switch>
    </>
  );
};
