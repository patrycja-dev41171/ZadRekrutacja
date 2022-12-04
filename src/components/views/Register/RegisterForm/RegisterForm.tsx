import React, { useState } from "react";
import { Button } from "../../../common/Button/Button";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { StoreState } from "../../../../redux/store";
import "./RegisterForm.scss";

type FormData = {
  login: string;
  password: string;
  email: string;
  phone: number | null;
};

export const RegisterForm = () => {
  const { starWarsData } = useSelector(
    (store: StoreState) => store.starWarsData
  );
  const [isChecked, setIsChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(
    "Wymagana akceptacja regulaminu"
  );

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleChange = () => {
    if (isChecked) {
      setIsChecked(!isChecked);
      setCheckboxError("Wymagana akceptacja regulaminu");
    } else {
      setIsChecked(!isChecked);
      setCheckboxError("");
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (isChecked) {
      try {
        const res = await fetch(`https://example/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, starWarsData }),
        });
        const response = await res.json();
        //response validation
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <form className={"form__register"} onSubmit={onSubmit}>
      <label className="text">
        Login:
        <input {...register("login", { required: "To pole jest wymagane." })} />
        {errors.login && (
          <span className="text__error">{errors.login?.message}</span>
        )}
      </label>
      <label className="text">
        Hasło:
        <input
          {...register("password", { required: "To pole jest wymagane." })}
        />
        {errors.password && (
          <span className="text__error">{errors.password?.message}</span>
        )}
      </label>
      <label className="text">
        E-mail:
        <input
          {...register("email", {
            required: "To pole jest wymagane",
            pattern: /@/,
          })}
        />
        {errors.email && (
          <span className="text__error">
            {errors.email?.message
              ? errors.email?.message
              : "Nieprawidłowy format adresu e-mail"}
          </span>
        )}
      </label>
      <label className="text">
        Numer telefonu:
        <input
          {...register("phone", {
            required: "To pole jest wymagane",
            pattern: /^[0-9]*$/,
            minLength: 9,
            maxLength: 9,
          })}
        />
        {errors.phone && (
          <span className="text__error">
            {errors.phone?.message
              ? errors.phone?.message
              : "Nieprawidłowy numer telefonu"}
          </span>
        )}
      </label>
      <label className="checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        Akceptuję regulamin
        <span className="checkbox__error">{checkboxError}</span>
      </label>
      <Button title={"zapisz"} size={"small"} color={"blue"} type="submit" />
    </form>
  );
};
