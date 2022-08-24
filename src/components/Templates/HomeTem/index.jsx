import React from "react";
import { Navbar } from "../../molecules";
import { Unlimited } from "../../organisms";
import "./app.css";
export const HomeTem = () => {
  return (
    <>
      <header className="head">
        <Navbar />
        <Unlimited />
      </header>
    </>
  );
};
