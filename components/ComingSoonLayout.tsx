import React from "react";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/Layout";

export default function ComingSoonLayout() {
  return (
    <Layout>
      <div className="flex justify-center">
        <ComingSoon />
      </div>
    </Layout>
  );
}
