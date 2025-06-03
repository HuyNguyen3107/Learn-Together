// import React, { forwardRef } from "react";

// const Content = forwardRef(function Content(props, ref) {
//   return (
//     <div ref={ref}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe ullam
//       debitis sit consequatur asperiores, commodi laboriosam veritatis, sunt
//       incidunt dolore vero aliquam, nesciunt molestiae eligendi aperiam quam
//       molestias nemo.
//     </div>
//   );
// });

// export default Content;

// HOC - Higher Order Component
// - Component cáp cao hơn của component hiện tại
// - Nhận vào một component và trả về một component mới
// - Các dữ liệu của component mới sẽ được truyền vào component cũ

function Content({ info }) {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe
        ullam debitis sit consequatur asperiores, commodi laboriosam veritatis,
        sunt incidunt dolore vero aliquam, nesciunt molestiae eligendi aperiam
        quam molestias nemo.
      </p>
    </>
  );
}

export default Content;
