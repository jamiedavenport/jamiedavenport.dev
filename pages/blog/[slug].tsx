import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Layout from "../../components/Layout";
import { getMDXComponent } from "mdx-bundler/client";
import { getPost, getPosts, PostSource } from "../../lib/blog";

type Props = {
  source: PostSource;
};

export default function BlogPost({ source }: Props) {
  const { code } = source;
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const postSource = await getPost(`${ctx.params?.slug}`); // TODO: Add a guard around params and throw an error if it doesn't exist

  return {
    props: postSource,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
