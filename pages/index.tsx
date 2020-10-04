import Footer from "components/Footer";
import Header from "components/Header";
import Intro from "components/Intro";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto space-y-10">
      <Header />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
