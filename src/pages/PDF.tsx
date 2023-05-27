import React, { useCallback, useRef } from "react";
import { ScrlContainer, ScrlItem, ScrlWrapper } from "../style/commStyle";
import jsPDF from "jspdf";
interface IProps {}

function PDF(props: IProps) {
  const items = [...Array(20)];

  const areaCapturedRef = useRef<HTMLDivElement>(null);
  // const imageCaptured =

  const onClickToMakePDF = useCallback(() => {
    const docPDF = new jsPDF();

    // docPDF.addImage();
  }, []);

  return (
    <div
      ref={areaCapturedRef}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <img src={require("../assets/cloud.png")} width={100} height={100} />
      <ScrlContainer>
        <ScrlItem>Header</ScrlItem>
        <ScrlWrapper>
          {items.map((itm, idx) => {
            return <ScrlItem key={itm}>{idx}</ScrlItem>;
          })}
        </ScrlWrapper>
      </ScrlContainer>
    </div>
  );
}

export default PDF;
