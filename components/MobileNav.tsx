import React from "react";

type Props = {
  isOpen: boolean;
};

const MobileNav: React.FC<Props> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-100">
      <a href="#">Blog</a>
    </div>
  );
};

export default MobileNav;
