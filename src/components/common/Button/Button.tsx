import React, { MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  title: string;
  size: string;
  color: string;
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={`btn btn--${props.size} btn--${props.color}`} onClick={props.onClick} type={props.type}>
      <p>{props.title}</p>
    </button>
  );
};
