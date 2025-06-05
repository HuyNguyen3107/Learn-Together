import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import History from "./History";

function MoneyTransfer() {
  const [history, setHistory] = useState([
    { id: 1, amount: 100, date: "2023-10-01" },
    { id: 2, amount: 200, date: "2023-10-02" },
    { id: 3, amount: 300, date: "2023-10-03" },
    { id: 4, amount: 400, date: "2023-10-04" },
    { id: 5, amount: 500, date: "2023-10-05" },
  ]);
  const [inputValue, setInputValue] = useState("");
  // useMemo
  const total = useMemo(() => {
    return history.reduce((sum, item) => {
      console.log("Calculating total...");

      return sum + item.amount;
    }, 0);
  }, [history]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newHistory = {
      id: history.length + 1,
      amount: +inputValue,
      date: new Date().toISOString().split("T")[0], // Lấy ngày hiện tại
    };

    setHistory([...history, newHistory]);
    setInputValue(""); // Reset input value after submission
  };

  // useCallback
  const handleClearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={inputValue}
        />
      </form>
      <History
        history={history}
        total={total}
        onClearHistory={handleClearHistory}
      />
    </div>
  );
}

export default MoneyTransfer;
