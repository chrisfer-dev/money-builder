import React from "react";

export default function HistoryList({ history }) {
  return (
    <div className="history">
      <h2>Growth History</h2>

      {history.length === 0 ? (
        <p>No savings added yet.</p>
      ) : (
        history.map((item) => (
          <div key={item.id} className="historyItem">
            + £{item.amount}
          </div>
        ))
      )}
    </div>
  );
}