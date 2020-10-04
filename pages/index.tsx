import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import Intro from "components/Intro";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jamie Davenport</title>
      </Head>
      <div className="container mx-auto space-y-10">
        <Header />
        <Intro />
        <Footer />
      </div>
    </>
  );
};

export default Home;
