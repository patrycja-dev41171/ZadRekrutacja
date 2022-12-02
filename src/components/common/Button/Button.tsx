import React from "react";
import "./Button.scss";

interface ButtonProps {
  title: string;
  size: string;
  color: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={`btn btn--${props.size} btn--${props.color}`}>
      <p>{props.title}</p>
    </button>
  );
};
