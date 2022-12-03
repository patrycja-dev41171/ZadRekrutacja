import React, { MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  title: string;
  size: string;
  color: string;
  onClick?: MouseEventHandler;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={`btn btn--${props.size} btn--${props.color}`} onClick={props.onClick}>
      <p>{props.title}</p>
    </button>
  );
};
