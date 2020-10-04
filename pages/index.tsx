import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto space-y-10">
      <Header />
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        pariatur quos vel! Aut, ratione ipsum enim accusamus nulla nisi
        aspernatur impedit provident. Eligendi perferendis sed commodi placeat
        tempora hic nemo?
      </div>
      <Footer />
    </div>
  );
};

export default Home;
