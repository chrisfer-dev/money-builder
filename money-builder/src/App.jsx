import { useState } from "react";
import "./App.css";

import SavingsCard from "./components/SavingsCard";
import HistoryList from "./components/HistoryList";

export default function App() {
  const [originalSavings, setOriginalSavings] = useState(0);
  const [addSavings, setAddSavings] = useState(0);
  const [history, setHistory] = useState([]);

  const totalSavings =
    Number(originalSavings) +
    history.reduce((sum, item) => sum + Number(item.amount), 0);

  const handleAddSavings = () => {
    if (!addSavings) return;

    const newEntry = {
      id: Date.now(),
      amount: Number(addSavings),
    };

    setHistory([newEntry, ...history]);
    setAddSavings(0);
  };

  return (
    <div className="container">
      <h1>💰 Savings Tracker</h1>

      <div className="cardGrid">
        <SavingsCard title="Original Savings">
          <input
            type="number"
            value={originalSavings}
            onChange={(e) => setOriginalSavings(e.target.value)}
          />
        </SavingsCard>

        <SavingsCard title="Add Savings">
          <input
            type="number"
            value={addSavings}
            onChange={(e) => setAddSavings(e.target.value)}
          />
          <button onClick={handleAddSavings}>Add</button>
        </SavingsCard>

        <SavingsCard title="Total Savings">
          <p className="total">£{totalSavings.toFixed(2)}</p>
        </SavingsCard>
      </div>

      {/* PROP PASSED HERE */}
      <HistoryList history={history} />
    </div>
  );
}
