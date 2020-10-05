import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import Intro from "components/Intro";
import Head from "next/head";
import WIP from "components/WIP";
import Section from "components/Section";
import Stats from "components/Stats";
import ColourBar from "components/ColourBar";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jamie Davenport</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        <ColourBar />
        <div className="container mx-auto space-y-20 p-4">
          <Header />

          <Section title="Welcome">
            <div className="space-y-10">
              <Intro />
              <Stats />
            </div>
          </Section>

          <Section title="Blog">
            <WIP />
          </Section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
