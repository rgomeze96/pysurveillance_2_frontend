import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div
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
