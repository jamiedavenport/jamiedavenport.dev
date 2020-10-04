import React from "react";
import Nav from "./Nav";

const DesktopNav: React.FC = () => {
  return (
    <div className="space-x-8">
      <Nav
        renderLink={(l) => (
          <a key={l.href} href={l.href}>
            {l.title}
          </a>
        )}
      />
    </div>
  );
};

export default DesktopNav;
