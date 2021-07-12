import React from "react";
import Logo from "./Logo";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="p-4 max-w-4xl mx-auto space-y-10">
      <header className="flex flex-row justify-between items-center">
        <Logo />
        <nav>Navigation</nav>
      </header>
      <main>{children}</main>
      <footer className="flex flex-row justify-between items-center">
        <p>Made with ❤️ in London 🇬🇧</p>
        <div>Social Icons</div>
      </footer>
    </div>
  );
}
