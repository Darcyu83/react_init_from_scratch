import React, { useEffect, useRef, useState } from "react";
import { getImagesDataUrls } from "../utils/file";
import styled from "@emotion/styled";

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100px;
  background: rgba(0, 255, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  scroll-snap-type: block mandatory;
  scroll-snap-align: start;
  scroll-behavior: smooth;

  /*  스크롤바 감추기 */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
  }
`;

const CarouselStage = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ImgCard = styled.div`
  flex: 1/4;
  /* width: 200px;
  min-width: 200px; */
  width: 100%;
  max-width: calc(100% / 4);
  height: 100px;
  /* width: 90%;
  min-width: 90%; */
  border: 1px dashed red;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

interface IProps {}

function ImgUploaderCarousel(props: IProps) {
  const [imgFiles, setImgFiles] = useState<FileList | null>(null);
  const [imgDataUrls, setImgDataUrls] = useState<
    (string | ArrayBuffer | null)[]
  >([]);

  const fileRef = useRef<HTMLInputElement | null>(null);

  const scrollRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    (async () => {
      if (imgFiles) {
        const keys = Object.keys(imgFiles);

        const fileArr = keys.map((key) => imgFiles[Number(key)]);
        const dataUrls = await getImagesDataUrls(fileArr);
        console.log(
          " 이미지 파일 선택됨 -> 처리 시작 ",
          imgFiles,
          imgFiles.item,
          dataUrls
        );

        [
          ...Array(
            Math.floor(dataUrls.length / 4) +
              Math.ceil((dataUrls.length % 4) / 10)
          ),
        ].map((_, grpIndex) => {
          console.log("grpIndex -> 처리 시작 ====2  ", grpIndex);

          [...Array(dataUrls.length)]
            .slice(grpIndex * 4, grpIndex * 4 + 4)
            .map((_, haha) => {
              console.log("grpIndex -> 처리 시작 ====3  ", haha);
            });
        });

        setImgDataUrls((curr) => [...curr, ...dataUrls]);
        if (fileRef && fileRef.current) fileRef.current.value = "";
      }
    })();
  }, [imgFiles]);

  return (
    <div
      style={{
        padding: 20,

        width: "100%",
        height: "100%",
        background: "rgba(0,255,0, 0.1)",
        border: "3px solid pink",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Multi image Uplodaer and Carousel</h1>

      <input
        ref={fileRef}
        type="file"
        multiple
        onChange={(e) => {
          setImgFiles(e.target.files);
        }}
        placeholder="파일을 선택하세요"
        accept="image/*"
      />

      <h1>Carousel</h1>

      <CarouselContainer>
        {imgDataUrls.map((dataUrl, index) => {
          return (
            <ImgCard
              key={"img_" + index}
              style={{ backgroundImage: `url(${dataUrl})` }}
            >
              {index}
            </ImgCard>
          );
        })}
      </CarouselContainer>

      <CarouselContainer>
        {[
          ...Array(
            Math.floor(imgDataUrls.length / 4) +
              Math.ceil((imgDataUrls.length % 4) / 10000)
          ),
        ].map((_, grpIndex) => {
          return (
            <CarouselStage
              key={"grp_" + grpIndex}
              ref={(el) => {
                if (el) scrollRef.current[grpIndex] = el;
              }}
            >
              {imgDataUrls
                .slice(grpIndex * 4, grpIndex * 4 + 4)
                .map((dataUrl, index) => {
                  return (
                    <ImgCard
                      key={"img_" + index}
                      style={{ backgroundImage: `url(${dataUrl})` }}
                    >
                      {index}
                    </ImgCard>
                  );
                })}
            </CarouselStage>
          );
        })}
      </CarouselContainer>

      <div style={{ display: "flex", gap: 8 }}>
        {[
          ...Array(
            Math.floor(imgDataUrls.length / 4) +
              Math.ceil((imgDataUrls.length % 4) / 10000)
          ),
        ].map((_, index) => (
          <div
            style={{
              height: 20,
              padding: 20,
              cursor: "pointer",
              border: "1px solid red",
            }}
            onClick={() => {
              scrollRef.current[index]?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgUploaderCarousel;
