import React from 'react'
import Intro from 'components/Intro'
import Section from 'components/Section'
import Layout from 'components/Layout'
import PostList from 'components/PostList'
import { GetStaticProps } from 'next'
import { getPosts, PostMeta } from 'lib/posts'
import WIP from 'components/WIP'
import Head from 'next/head'

type Props = {
  posts: PostMeta[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
  }
}

const Home: React.FC<Props> = ({ posts }) => {
  const description = `Software Engineer based in the UK. Working at Infinity Works. Passionate about Open Source`
  const imageUrl = 'https://jamiedavenport.dev/icon.png'

  return (
    <Layout title="Jamie Davenport">
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jdavenport97" />
        <meta name="twitter:creator" content="@jdavenport97" />
        <meta name="twitter:title" content="Jamie Davenport" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jamie Davenport" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="description" content={description} />
      </Head>
      <div className="space-y-20">
        <Section title="Welcome">
          <div className="space-y-16">
            <Intro />
            {/* <Stats /> */}
          </div>
        </Section>

        <Section title="Blog">
          <div className="mb-10">
            <WIP />
          </div>
          <PostList
            posts={posts.sort((a, b) => b.date.getTime() - a.date.getTime())}
          />
        </Section>
      </div>
    </Layout>
  )
}

export default Home
