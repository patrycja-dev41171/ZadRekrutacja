import React from "react";
import { Container } from "../../common/Container/Container";
import "./Home.scss";
import { Button } from "../../common/Button/Button";
import {Profile} from "./Profile/Profile";

export const Home = () => {
  return (
    <>
      <Container>
        <nav className="home__nav">
          <p>Patrycja Ińska</p>
          <Button title="formularz rejestracyjny" color="gray" size="big" />
        </nav>
          <Profile />
      </Container>
    </>
  );
};
