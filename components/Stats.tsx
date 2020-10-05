import React from "react";
import Divider from "./Divider";

type StatProps = {
  title: string;
  value: string;
};

const Stat: React.FC<StatProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col flex-1 items-center font-mono space-y-2">
      <div className="text-5xl font-black leading-none">{value}</div>
      <div className="text-gray-600 leading-none">{title}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col space-y-20 md:space-y-0 md:flex-row bg-gray-300 rounded-lg px-5 py-16 md:py-10">
      <Stat title="Repositories" value="21" />
      <Stat title="Contributed To" value="3" />
      <Stat title="Total PRs" value="9" />
    </div>
  );
};

export default Stats;
