import Layout from "@/components/Layout";
import { getPosts, PostMeta } from "@/lib/blog";
import { GetStaticProps } from "next";
import React from "react";
import NextLink from "next/link";

type Props = {
  posts: PostMeta[];
};

export default function Blog({ posts }: Props) {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-10">Latest posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <NextLink href={`/blog/${post.slug}`}>
              <a>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-700">{post.description}</p>
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
