import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms";
import { Image } from "../../atoms";
import logo from "../../../assets/Logonetflix.png";

//style each of the components
//using style components to style the div
// style the components using style components
// style the nav container

export const Navbar = () => {
  const Photo = styled(Image)`
    width: 9rem;
    @media screen and (max-width: 760px) {
      width: 7rem;
    }

    @media screen and (max-width: 550px) {
      width: 6rem;
    }
  `;

  const Btn = styled(Button)`
    background-color: #e50914;
    border: none;
    border-radius: 0.3rem;
    font-size: 1rem;
    padding: 0.4rem 1rem 0.4rem 1rem;
    height: 2rem;
    color: #fffff7;
    @media screen and (max-width: 550px) {
      padding: 0rem 0.6rem 0rem 0.6rem;
      font-size: 0.8rem;
      height: 1.6rem;
    }
  `;

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    align-item: center;
    padding: 1.6rem 2.5rem 0 2.5rem;
    @media screen and (max-width: 760px) {
      padding: 1.6rem 2.2rem 0 2.2rem;
    }
    @media screen and (max-width: 550px) {
      padding: 1.6rem 2rem 0 2rem;
    }
  `;

  return (
    <>
      <Container>
        <Photo image={logo} alt={"logo"} />
        <Btn>Sign In</Btn>
      </Container>
    </>
  );
};
