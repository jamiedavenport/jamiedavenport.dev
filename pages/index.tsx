import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import Intro from "components/Intro";
import Head from "next/head";
import WIP from "components/WIP";
import Section from "components/Section";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jamie Davenport</title>
      </Head>
      <div className="container mx-auto space-y-16 p-4">
        <Header />

        <Section title="Welcome">
          <Intro />
        </Section>

        <Section title="Blog">
          <WIP />
        </Section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
