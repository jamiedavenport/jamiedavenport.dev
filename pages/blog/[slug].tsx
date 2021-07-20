import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Layout from "@/components/Layout";
import { components } from "@/components/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { getPost, getPosts, PostSource } from "../../lib/blog";

type Props = {
  source: PostSource;
};

export default function BlogPost({ source }: Props) {
  const { code, frontmatter } = source;
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout title={frontmatter.title}>
      <div className="px-4 md:px-8">
        <h1 className="text-3xl mb-5">{frontmatter.title}</h1>
        <div className="prose">
          <Component components={components} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const postSource = await getPost(`${ctx.params?.slug}`); // TODO: Add a guard around params and throw an error if it doesn't exist

  return {
    props: {
      source: postSource,
    },
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
