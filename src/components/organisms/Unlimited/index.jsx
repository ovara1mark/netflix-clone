import React from "react";
import styled from "styled-components";
import { Input, Text } from "../../atoms";
import { Button } from "../../atoms";
import { BsChevronRight } from "react-icons/bs";

// import text and set type
// import input and button and style using
// style component and import style styled components
export const Unlimited = () => {
  const Limited = styled.div`
    width: 40rem;
    padding: 12% 0 15% 0;
    border: 1px solid white;
    @media screen and (max-width: 954px) {
      width: 30rem;
      padding: 12% 0 15% 0;
    }
    @media screen and (max-width: 554px) {
      width: 85%;
    }
  `;

  const Limit = styled.div`
    display: flex;
    justify-content: center;
    color: white;
  `;

  const HeadOne = styled(Text)`
    text-align: center;
    font-size: 3rem;
    padding: 0 1rem 0 1rem;
    font-family: Netflix Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
    @media screen and (max-width: 954px) {
      padding: 0rem;
      font-size: 2.6rem;
    }
    @media screen and (max-width: 554px) {
      font-size: 2rem;
    }
  `;
  const HeadTwo = styled(Text)`
    padding-top: 1rem;
    text-align: center;
    font-weight: 400;
    font-size: 1.7rem;
  `;
  const Pg = styled(Text)`
    text-align: center;
    padding: 1rem 0 1rem 0;
    font-size: 1.2rem;
    font-weight: 500;
  `;
  const Inputed = styled(Input)`
    width: 70%;
    padding: 1.2rem 0 1.2rem 0;
    input[type="email"]::placeholder {
      font-size: 2rem;
    }
    // border: none;
    @media screen and (max-width: 954px) {
      width: 100%;
    }

    @media screen and (max-width: 750px) {
      padding: 1rem 0 1rem 0;
    }
  `;
  const Btn = styled(Button)`
    width: 30%;
    padding: 0.2rem 0.2rem 1.1rem 0;
    background-color: #e50914;
    border: none;
    color: #fffff7;
    font-size: 1.5rem;
    tex-align: center;

    @media screen and (max-width: 954px) {
      border-radius: 0.2rem;
      width: 7.5rem;
      font-size: 1rem;
      padding: 0.3rem 0.2rem 0.5rem 0.3rem;
    }
  `;

  const ChevronRight = styled(BsChevronRight)`
    padding-left: 0.6rem;
    padding-top: 0.8rem;
    font-size: 30px;
    @media screen and (max-width: 954px) {
      padding-left: 0.2rem;
      padding-top: 0.5rem;
      font-size: 20px;
    }
  `;

  const Center = styled.span`
    @media screen and (max-width: 954px) {
      display: flex;
      justify-content: center;
      padding-top: 1rem;
    }
  `;

  return (
    <>
      <Limit>
        <Limited>
          <HeadOne type={"h1"}>Unlimited movies, TV shows, and more.</HeadOne>
          <HeadTwo type={"h2"}>Watch anywhere. Cancel anytime.</HeadTwo>
          <Pg>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Pg>
          <Inputed></Inputed>
          <Center>
            <Btn>
              Get Started
              <ChevronRight />
            </Btn>
          </Center>
        </Limited>
      </Limit>
    </>
  );
};
