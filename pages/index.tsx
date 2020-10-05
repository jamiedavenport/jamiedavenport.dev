import React from "react";
import Intro from "components/Intro";
import WIP from "components/WIP";
import Section from "components/Section";
import Stats from "components/Stats";
import Layout from "components/Layout";

const Home: React.FC = () => {
  return (
    <Layout title="Jamie Davenport">
      <Section title="Welcome">
        <div className="space-y-16">
          <Intro />
          <Stats />
        </div>
      </Section>

      <Section title="Blog">
        <WIP />
      </Section>
    </Layout>
  );
};

export default Home;
