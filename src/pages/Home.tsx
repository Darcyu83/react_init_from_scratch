import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
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

const ScrlContainer = styled.div`
  height: 600px;
  /* border: 3px solid blue; */
  overflow-y: scroll;
`;
const ScrlItem = styled.div`
  border: 1px dashed teal;
  height: 120px;
`;

function Home() {
  const items = [1, 2, 3, 4, 5, 6];
  const lastItem = useRef<HTMLDivElement[]>([]);
  const scrlContainer = useRef<HTMLDivElement | null>(null);
  const targetIdx = items.findIndex((item) => item === 4);
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
    <div style={{}}>
      <Title>Lorem ipsum dolor sit amet.</Title>
      <span>NODE_ENV: {process.env.NODE_ENV}</span>
      <Radio />
      <ScrlContainer ref={scrlContainer}>
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
              {itm}
            </ScrlItem>
          );
        })}
      </ScrlContainer>
    </div>
  );
}

export default Home;
