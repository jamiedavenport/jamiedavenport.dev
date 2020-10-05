import React from "react";
import Divider from "./Divider";

type Props = {
  title: string;
};

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-center text-gray-500 font-bold text-sm font-mono uppercase mb-2">
        {title}
      </h2>
      <Divider />
      <div className="mt-10">{children}</div>
    </div>
  );
};

export default Section;
