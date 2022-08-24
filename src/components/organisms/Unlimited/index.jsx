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
    width: 47%;
    padding: 15% 0 15% 0;
  `;

  const Limit = styled.div`
    display: flex;
    justify-content: center;
    color: white;
  `;

  const HeadOne = styled(Text)`
    text-align: center;
    font-size: 3rem;
  `;
  const HeadTwo = styled(Text)`
    text-align: center;
  `;
  const Pg = styled(Text)`
    text-align: center;
  `;
  const Inputed = styled(Input)`
    width: 70%;
    padding: 1.2rem 0 1.2rem 0;
    input[type="email"]::placeholder {
      font-size: 2rem;
    }
    // border: none;
  `;
  const Btn = styled(Button)`
    width: 30%;
    padding: 0.2rem 0.2rem 1.1rem 0;
    background-color: #e50914;
    border: none;
    color: #fffff7;
    font-size: 1.5rem;
    tex-align: center;
  `;

  const ChevronRight = styled(BsChevronRight)`
    padding-left: 0.6rem;
    padding-top: 0.8rem;
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
          <Btn>
            Get Started
            <ChevronRight size={30} />
          </Btn>
        </Limited>
      </Limit>
    </>
  );
};
