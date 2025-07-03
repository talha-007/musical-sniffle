import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  overflow: "hidden",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
});

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  paddingTop: "75%", // 4:3 aspect ratio
});

const Image = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const BeforeImage = styled(Image)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const AfterImage = styled(Image)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const SliderContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
  cursor: "ew-resize",
});

const SliderLine = styled(Box)({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "4px",
  backgroundColor: "#fff",
  transform: "translateX(-50%)",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
});

const SliderButton = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  color: "black",
  padding: "0.5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "grab",
  boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  "&:active": {
    cursor: "grabbing",
  },
  zIndex: 3,
});

const Slider = styled("input")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  cursor: "ew-resize",
  margin: 0,
  padding: 0,
  zIndex: 4,
});

const Label = styled(Box)({
  color: "#fff",
  fontSize: "14px",
  fontWeight: "bold",
  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
});

const ImageComparison = ({ beforeImage, afterImage }) => {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <Container>
      <ImageContainer>
        <AfterImage src={afterImage} alt="After" />
        <BeforeImage
          src={beforeImage}
          alt="Before"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        />
        <SliderContainer>
          <Slider
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={handleSliderChange}
            aria-label="Compare before and after"
          />
          <SliderLine style={{ left: `${position}%` }} />
          <SliderButton style={{ left: `${position}%` }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="96"
                y1="128"
                x2="16"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <polyline
                points="48 160 16 128 48 96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="160"
                y1="128"
                x2="240"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <polyline
                points="208 96 240 128 208 160"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </SliderButton>
        </SliderContainer>
      </ImageContainer>
    </Container>
  );
};

export default ImageComparison;
