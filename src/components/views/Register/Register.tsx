import React from "react";
import { Container } from "../../common/Container/Container";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import "./Register.scss";

export const Register = () => {
  return (
    <Container>
      <header className="register__header">
        <h1 className="register__header__h1">formularz rejestracyjny</h1>
        <div className="register__header__rectangle"></div>
      </header>
      <main className="register__main">
        <RegisterForm />
      </main>
    </Container>
  );
};
