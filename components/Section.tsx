import React from "react";

type Props = {
  title: string;
};

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="space-y-10">
      <div className="text-center text-gray-400 font-bold text-sm font-mono uppercase">
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
