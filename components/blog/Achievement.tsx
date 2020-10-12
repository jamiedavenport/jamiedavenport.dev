import React from "react";

const Achievement: React.FC = ({ children }) => {
  return (
    <div className="rounded-md bg-yellow-100 p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">🎉</div>
        <div className="ml-3">
          <div className="text-sm leading-5 text-yellow-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
