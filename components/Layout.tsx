import React from "react";
import Logo from "./Logo";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="p-4 max-w-4xl mx-auto space-y-10">
      <header className="flex flex-row justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul className="flex flex-row space-x-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="flex flex-row justify-between items-center">
        <p>Made with plenty of ☕️ and 💕</p>
        <div>Social Icons</div>
      </footer>
    </div>
  );
}
