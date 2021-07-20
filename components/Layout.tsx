import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import accounts from "../lib/accounts";
import { NextSeo } from "next-seo";

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function Layout({ children, title, description }: Props) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.png",
          },
        ]}
      />
      <div className="p-4 max-w-4xl mx-auto space-y-16">
        <header className="flex flex-col md:flex-row space-y-4 md:justify-between md:items-center md:space-y-0">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <nav className="flex space-y-4 flex-col md:flex-row md:space-x-4 md:items-center md:space-y-0">
            <ul className="flex flex-row space-x-4 items-center">
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
            <ul className="flex flex-row space-x-4 items-center">
              {accounts.map(({ name, url, logo }) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {logo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="flex flex-col md:flex-row space-y-4 md:justify-between md:items-center md:space-y-0">
          <p>Made with plenty of 💕 and ☕️</p>
          <ul className="flex flex-row space-x-4 items-center">
            {accounts.map(({ name, url }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
}
