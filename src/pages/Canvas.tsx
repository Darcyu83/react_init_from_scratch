import jsPDF from "jspdf";
import React, { useEffect, useRef } from "react";

interface IProps {}

function Canvas(props: IProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      console.log("캔버스 로직 시작 !! ", canvasRef.current);

      const context = canvasRef.current.getContext("2d");
      if (!context) return;
      context.beginPath();
      context.moveTo(0, 100);
      context.lineTo(300, 100);

      //   context.rect(0, 0, 300, 200);

      context.stroke();

      context.closePath();
    }
  }, []);
  return (
    <div style={{}}>
      <h1>Canvas</h1>
      <canvas ref={canvasRef} id="canvas" height={400} width={400}>
        If you see this message, your browser does not support canvas.
      </canvas>
    </div>
  );
}

export default Canvas;
