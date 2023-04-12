import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
import Radio from "../components/Radio";
import IconMenu from "../assets/isvg.svg";
import google from "../assets/google.png";
const Title = styled.span`
  display: inline-block;
  padding: 1rem;
  border: 1px solid red;
  font-size: clamp(1rem, 3vw, 1.5rem);
  background: teal;

  /* min-width: 100px; */
  text-size-adjust: initial;
`;

const ScrlContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;

  background: rgb(30, 144, 255);
  overflow: hidden;
  border: 3px solid blue;
  box-sizing: border-box;
`;

const ScrlWrapper = styled.div`
  width: 100%;
  border: 1px solid white;

  overflow: hidden;
`;

const ScrlItem = styled.div`
  border: 1px dashed teal;
  height: 56px;
`;

function Home() {
  const items = [...Array(20)];
  const lastItem = useRef<HTMLDivElement[]>([]);
  const scrlContainer = useRef<HTMLDivElement | null>(null);
  const targetIdx = items.map((_, idx) => idx).findIndex((item) => item === 4);
  useEffect(() => {
    lastItem.current?.map((el) => {
      console.log(" el. ===", el.offsetTop);
    });
    console.log(" scrlContainer. ===", scrlContainer.current?.scrollHeight);
    const scrlHeight = lastItem.current[targetIdx].parentElement?.scrollHeight;
    const offsetTop = lastItem.current[targetIdx].offsetTop;

    const padding = scrlHeight ? scrlHeight - offsetTop + "px" : "0px";
    console.log("parent padding === ", padding);
    if (scrlContainer.current)
      scrlContainer.current.style.paddingBottom = "236px";
  }, [lastItem.current, scrlContainer.current]);

  return (
    <div
      style={{
        width: "100vw",
        background: "red",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "100px 20px 1fr 20px",
      }}
    >
      <Title>Lorem ipsum dolor sit amet.</Title>

      <Radio />
      <ScrlContainer ref={scrlContainer}>
        {/* <IconMenu fill={"red"} width={24} /> */}
        {/* <img src={require("../assets/cloud.png")} alt="cloud" />
        <img src={google} alt="google" /> */}
        <ScrlItem>Header</ScrlItem>
        <ScrlWrapper>
          {items.map((itm, idx) => {
            return (
              <ScrlItem
                key={itm}
                ref={(e) => {
                  console.log(
                    "lastItem ===",
                    e?.offsetTop,
                    lastItem,
                    lastItem.current
                  );
                  if (e && lastItem && lastItem.current) {
                    lastItem.current[idx] = e;
                  }
                }}
              >
                {idx}
              </ScrlItem>
            );
          })}
        </ScrlWrapper>
      </ScrlContainer>
      <span
        style={{
          background: "gray",
          lineHeight: "20px",
          verticalAlign: "middle",
        }}
      >
        NODE_ENV: {process.env.NODE_ENV}
      </span>
    </div>
  );
}

export default Home;
