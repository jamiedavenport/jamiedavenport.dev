import React from "react";
import Intro from "components/Intro";
import Section from "components/Section";
import Stats from "components/Stats";
import Layout from "components/Layout";
import PostList from "components/PostList";
import { GetStaticProps } from "next";
import { getPosts, PostMeta } from "lib/posts";

type Props = {
  posts: PostMeta[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Layout title="Jamie Davenport">
      <div className="space-y-20">
        <Section title="Welcome">
          <div className="space-y-16">
            <Intro />
            <Stats />
          </div>
        </Section>

        <Section title="Blog">
          <PostList
            posts={posts.sort((a, b) => b.date.getTime() - a.date.getTime())}
          />
        </Section>
      </div>
    </Layout>
  );
};

export default Home;
