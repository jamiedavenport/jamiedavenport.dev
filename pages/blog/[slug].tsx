import React from 'react'
import Divider from 'components/Divider'
import Layout from 'components/Layout'
import { getPost, getPostPaths, Post } from 'lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import { prettyPostDate } from 'lib/date'
import Head from 'next/head'
import components from 'components/blog/components'

const editUrl = (slug) =>
  `https://github.com/jamiedavenport/jamiedavenport.dev/edit/main/posts/${slug}.mdx`

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://jamiedavenport.dev/blog/${slug}`
  )}`

type Props = {
  post: Post
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params.slug as string
  const post = await getPost(slug)

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostPaths()

  return { paths, fallback: false }
}

const BlogPost: React.FC<Props> = ({ post }) => {
  const { slug, title, description, body, date, image } = post
  const content = hydrate(body, { components })

  const dateStr = prettyPostDate(date)

  const imageUrl = `https://jamiedavenport.dev/images/${image}`

  return (
    <Layout title={title}>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jdavenport97" />
        <meta name="twitter:creator" content="@jdavenport97" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="description" content={description} />
      </Head>
      <div className="space-y-10">
        <div>
          <h1 className="text-center leading-none text-4xl mb-3 text-gray-900 font-bold font-mono dark:text-gray-100">
            {title}
          </h1>
          <p className="block text-center leading-none mb-3 text-gray-500 dark:text-gray-500">
            {dateStr}
          </p>
          <h2 className="text-center leading-none mb-1 text-gray-700 dark:text-gray-300">
            {description}
          </h2>
          <Divider />
        </div>
        <div className="prose dark:prose-dark mx-auto">{content}</div>
        <div className="space-x-2 text-gray-600 text-sm">
          <a href={discussUrl(slug)} target="_blank" rel="noopener noreferrer">
            Discuss on Twitter
          </a>
          <span>•</span>
          <a href={editUrl(slug)} target="_blank" rel="noopener noreferrer">
            Edit on Github
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
