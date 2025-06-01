import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Image = forwardRef(function Image(props, ref) {
  const imageRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      zoomIn: () => {
        const currentWidth = imageRef.current.clientWidth;
        imageRef.current.style.width = `${currentWidth * 1.1}px`;
      },
      zoomOut: () => {
        const currentWidth = imageRef.current.clientWidth;
        imageRef.current.style.width = `${currentWidth * 0.9}px`;
      },
      reset: () => {
        imageRef.current.style.width = ``;
      },
    };
  });
  return <img ref={imageRef} src="https://picsum.photos/200" alt="" />;
});

export default Image;
