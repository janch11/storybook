import clsx from "clsx";
import React from "react";
import "./Col.scss";

export const Col = ({ children, className }) => {
  return (
    <div className={clsx("col", className)}>
      <div className="col__content">{children}</div>
    </div>
  );
};
