import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>Jamie Davenport</div>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav isOpen={isNavOpen} />
      </div>
    </div>
  );
};

export default Header;
