import React, { memo } from "react";

const History = memo(function History({ history, total, onClearHistory }) {
  console.log("render History component");

  return (
    <div>
      <h2>Lịch sử giao dịch</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Số tiền</th>
            <th>Ngày</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Tổng cộng</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={onClearHistory}>Xóa lịch sử</button>
    </div>
  );
});
export default History;
