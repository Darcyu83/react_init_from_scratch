import styled from "@emotion/styled";
import React from "react";
import Radio from "../components/Radio";

const Title = styled.span`
  display: inline-block;
  padding: 1rem;
  border: 1px solid red;
  font-size: clamp(1rem, 3vw, 1.5rem);
  width: 20%;
  /* min-width: 100px; */
  text-size-adjust: initial;
`;

function Home() {
  return (
    <div style={{}}>
      <Title>Lorem ipsum dolor sit amet.</Title>
      <Radio />
    </div>
  );
}

export default Home;
