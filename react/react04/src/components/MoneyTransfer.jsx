import React, { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import History from "./History";
import Notification from "./Notification";

function MoneyTransfer() {
  // Load history from localStorage or use default
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, amount: 100, date: "2023-10-01" },
      { id: 2, amount: 200, date: "2023-10-02" },
      { id: 3, amount: 300, date: "2023-10-03" },
      { id: 4, amount: 400, date: "2023-10-04" },
      { id: 5, amount: 500, date: "2023-10-05" },
    ];
  });
  const [inputValue, setInputValue] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });
  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);
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

    if (!inputValue || inputValue <= 0) {
      setNotification({
        message: "Vui lòng nhập số tiền hợp lệ!",
        type: "error",
      });
      return;
    }

    const newHistory = {
      id: history.length + 1,
      amount: +inputValue,
      date: new Date().toISOString().split("T")[0], // Lấy ngày hiện tại
    };

    setHistory([...history, newHistory]);
    setInputValue(""); // Reset input value after submission
    setNotification({
      message: `Đã thêm giao dịch ${inputValue} thành công!`,
      type: "success",
    });
  };
  // useCallback
  const handleClearHistory = useCallback(() => {
    setHistory([]);
    setNotification({
      message: "Đã xóa toàn bộ lịch sử giao dịch!",
      type: "info",
    });
  }, []);
  return (
    <div>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />{" "}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit">💸 Thêm giao dịch</button>
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
