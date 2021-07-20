import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Layout from "@/components/Layout";
import { components } from "@/components/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { getPost, getPosts, PostSource } from "../../lib/blog";
import format from "date-fns/format";

type Props = {
  source: PostSource;
};

export default function BlogPost({ source }: Props) {
  const { code, meta } = source;
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout title={meta.title} description={meta.description}>
      <div className="px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
        <p className="text-sm font-bold text-gray-500 mb-10">
          {format(meta.published ?? new Date(), "do MMMM yyyy")}
        </p>
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
  const source = await getPost(`${ctx.params?.slug}`); // TODO: Add a guard around params and throw an error if it doesn't exist

  return {
    props: {
      source,
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
