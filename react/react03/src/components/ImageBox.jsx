import React, { useRef } from "react";
import Image from "./Image";

function ImageBox() {
  const imageRef = useRef();
  const handleZoomIn = () => {
    imageRef.current.zoomIn();
  };
  const handleZoomOut = () => {
    imageRef.current.zoomOut();
  };
  const handleReset = () => {
    imageRef.current.reset();
  };
  return (
    <div>
      <Image ref={imageRef} />
      <hr />
      <div
        style={{
          display: "flex",
          columnGap: "20px",
        }}
      >
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default ImageBox;
