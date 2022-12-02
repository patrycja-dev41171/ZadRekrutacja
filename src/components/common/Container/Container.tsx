import React from "react";
import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  return <div className="container">{props.children}</div>;
};
