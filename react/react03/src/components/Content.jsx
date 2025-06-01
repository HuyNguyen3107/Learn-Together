import React, { forwardRef } from "react";

const Content = forwardRef(function Content(props, ref) {
  return (
    <div ref={ref}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe ullam
      debitis sit consequatur asperiores, commodi laboriosam veritatis, sunt
      incidunt dolore vero aliquam, nesciunt molestiae eligendi aperiam quam
      molestias nemo.
    </div>
  );
});

export default Content;
