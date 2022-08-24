import React from "react";

// to take type
export const Input = ({ className }) => {
  return (
    <label>
      <input type="email" className={className} placeholder="Email address" />
    </label>
  );
};
