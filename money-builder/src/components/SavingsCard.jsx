import React from "react";

export default function SavingsCard({
  title,
  children,
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}