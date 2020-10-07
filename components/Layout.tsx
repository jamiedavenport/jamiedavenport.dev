import React from "react";
import ColourBar from "components/ColourBar";
import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";

type Props = {
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <ColourBar />
        <div className="container mx-auto space-y-20 p-4">
          <Header />

          <div>{children}</div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
