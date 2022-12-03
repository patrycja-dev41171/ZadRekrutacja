import React from "react";
import { Container } from "../../common/Container/Container";
import './Register.scss';

export const Register = () => {
  return (
    <Container>
      <header className="register__header">
          <h1 className="register__header__h1">formularz rejestracyjny</h1>
          <div className="register__header__rectangle"></div>
      </header>
    </Container>
  );
};
