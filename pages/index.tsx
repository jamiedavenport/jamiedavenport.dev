import React from 'react'
import Intro from 'components/Intro'
import Section from 'components/Section'
import Layout from 'components/Layout'
import PostList from 'components/blog/PostList'
import { GetStaticProps } from 'next'
import { getPosts, PostMeta } from 'lib/posts'
import Head from 'next/head'
import ProjectCard from 'components/portfolio/ProjectCard'
import { projects } from 'lib/project'
import { getProfile } from 'lib/profile'
import Stats from 'components/Stats'
import Container from 'components/Container'

type Props = {
  posts: PostMeta[]
  location: string
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPosts()
  const { location } = await getProfile()

  return {
    props: {
      posts,
      location,
    },
  }
}

const Home: React.FC<Props> = ({ posts, location }) => {
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
      <Container>
        <div className="space-y-32">
          <Section title="Welcome">
            <div className="space-y-16">
              <Intro location={location} />
              {/* <Stats /> */}
            </div>
          </Section>

          <Section title="Stats">
            <Stats posts={posts.length} />
          </Section>

          <Section title="Projects">
            <div className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div className="flex flex-col" key={project.name}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Blog">
            <PostList
              posts={posts.sort((a, b) => b.date.getTime() - a.date.getTime())}
            />
          </Section>
        </div>
      </Container>
    </Layout>
  )
}

export default Home
