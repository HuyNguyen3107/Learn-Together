import React, { useEffect, useLayoutEffect } from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
      // Reset count to 0 when it reaches 5
    }
  }, [count]); // Dependency array, runs effect when count changes
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button variant="outlined" color="primary" onClick={increaseCount}>
        Increase
      </Button>
    </div>
  );
}

export default Counter;

// useEffect
// 1. State thay đổi
// 2. Re-render
// 3. UI updated
// 4. Cleanup
// 5. Callback thực hiện

// useLayoutEffect
// 1. State thay đổi
// 2. Re-render
// 3. Cleanup
// 4.Callback thực hiện
// 5. UI updated
