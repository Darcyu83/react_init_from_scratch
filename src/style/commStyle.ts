import styled from "@emotion/styled";

export const Title = styled.span`
  display: inline-block;
  padding: 1rem;
  border: 1px solid red;
  font-size: clamp(1rem, 3vw, 1.5rem);
  background: teal;

  /* min-width: 100px; */
  text-size-adjust: initial;
`;

export const ScrlContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;

  background: rgb(30, 144, 255);
  overflow: scroll;
  border: 3px solid blue;
  box-sizing: border-box;
`;

export const ScrlWrapper = styled.div`
  width: 100%;
  border: 1px solid white;

  /* overflow: hidden; */
`;

export const ScrlItem = styled.div`
  border: 1px dashed teal;
  height: 56px;
`;
