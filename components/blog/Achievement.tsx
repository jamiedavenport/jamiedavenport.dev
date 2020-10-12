import React from "react";

const Achievement: React.FC = ({ children }) => {
  return (
    <div className="bg-yellow-300 border-yellow-400">
      <div>🚀</div>
      <div>{children}</div>
    </div>
  );
};

export default Achievement;
