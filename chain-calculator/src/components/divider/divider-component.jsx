import React from "react";

const Divider = ({ color }) => {
  return (
    <div
      style={{
        height: "48px",
        border: `1px solid ${color}`,
        marginTop: "1px",
        transform: "scaleX(0.4)",
      }}
    />
  );
};

export default Divider;
