import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div
      className="bg-light"
      style={{
        height: "90vh",
        margin: "auto",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};
