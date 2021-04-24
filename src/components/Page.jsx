import React from "react";

export const Page = ({ title, children }) => {
  return (
    <div className="bg-light" style={{ textAlign: "center", margin: "20px" }}>
      {children}
    </div>
  );
};
