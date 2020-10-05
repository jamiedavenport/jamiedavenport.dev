import Divider from "components/Divider";
import Layout from "components/Layout";
import React from "react";

const BlogPost: React.FC = () => {
  return (
    <Layout title="Title">
      <div className="space-y-10">
        <div>
          <h1 className="text-center leading-none text-4xl text-gray-900 font-bold font-mono">
            Title
          </h1>
          <h2 className="text-center leading-none mb-2 text-gray-700">
            Description
          </h2>
          <Divider />
        </div>
        <div>Body</div>
      </div>
    </Layout>
  );
};

export default BlogPost;
