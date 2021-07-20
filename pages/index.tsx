import React from "react";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Jamie Davenport" description="Software Engineer">
      <AboutMe />
    </Layout>
  );
}
