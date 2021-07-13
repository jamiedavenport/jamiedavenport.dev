import React from "react";
import Link from "next/link";
import Head from "next/head";
import Logo from "./Logo";
import accounts from "../lib/accounts";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Jamie Davenport</title>
      </Head>
      <div className="p-4 max-w-4xl mx-auto space-y-10">
        <header className="flex flex-row justify-between items-center">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <nav>
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
        <footer className="flex flex-row justify-between items-center">
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
