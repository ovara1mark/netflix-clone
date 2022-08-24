import React from "react";

// to take type to select the type of text
// to take children to input values

export const Text = ({ type, children, className }) => {
  if (type === "h1") {
    return <h1 className={className}>{children}</h1>;
  }

  if (type === "h2") {
    return <h2 className={className}>{children}</h2>;
  }

  return <p className={className}>{children}</p>;
};
