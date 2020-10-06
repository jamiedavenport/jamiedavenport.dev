import React from "react";
import Divider from "components/Divider";
import Layout from "components/Layout";
import { getPost, getPostPaths, Post } from "lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";

type Props = {
  post: Post;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params.slug as string;
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostPaths();

  return { paths, fallback: false };
};

const BlogPost: React.FC<Props> = ({ post }) => {
  const { title, description, body } = post;
  const content = hydrate(body);

  return (
    <Layout title={title}>
      <div className="space-y-10">
        <div>
          <h1 className="text-center leading-none text-4xl mb-2 text-gray-900 font-bold font-mono">
            {title}
          </h1>
          <h2 className="text-center leading-none mb-1 text-gray-700">
            {description}
          </h2>
          <Divider />
        </div>
        <div className="prose mx-auto">{content}</div>
      </div>
    </Layout>
  );
};

export default BlogPost;
