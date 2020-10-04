import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileNavButton from "./MobileNavButton";

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
          <MobileNavButton
            isOpen={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </div>
      <div className="md:hidden">
        <MobileNav isOpen={isNavOpen} />
      </div>
    </div>
  );
};

export default Header;
