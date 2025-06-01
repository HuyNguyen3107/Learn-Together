import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Content from "./components/Content";
import ImageBox from "./components/ImageBox";

function App() {
  // const inputRef = useRef();
  // const contentRef = useRef();
  // // Giá trị bền vững: .current giữ nguyên giá trị giữa các lần render
  // // Thay đổi không gây ra re-render
  // // const [count, setCount] = useState(0);
  // const countRef = useRef(0);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputRef.current.value);
  // };
  // const handleIncrease = () => {
  //   countRef.current++;
  //   console.log(countRef);
  // };
  // const handleDecrease = () => {
  //   countRef.current--;
  // };

  // useEffect(() => {
  //   inputRef.current.focus();
  //   contentRef.current.innerText = "ok";
  // }, []);
  return (
    <div>
      <ImageBox />
      {/* <div
        style={{
          display: "flex",
          columnGap: "20px",
        }}
      >
        <button onClick={handleDecrease}>-</button>
        <span>{countRef.current}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
      <Content ref={contentRef} /> */}
    </div>
  );
}

export default App;
