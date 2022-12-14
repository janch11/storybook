import React from "react";
import "./Row.scss";
import clsx from "clsx"

export const Row = ({ children, className }) => {
  return <div className={clsx("row", className)}>{children}</div>;
};
