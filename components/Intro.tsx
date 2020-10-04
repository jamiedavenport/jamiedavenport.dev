import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="text-2xl space-y-4">
      <div>
        💻 Software Engineer <span className="text-gray-600">@</span>{" "}
        <span className="text-orange-500 font-bold">Infinity Works</span>
      </div>
      <div>🇬🇧 United Kingdom</div>
    </div>
  );
};

export default Intro;
