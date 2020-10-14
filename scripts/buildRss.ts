import fs from 'fs'
import RSS from 'rss'
import { getPosts } from '../lib/posts'

const feed = new RSS({
  title: "Jamie Davenport's Blog",
  site_url: 'https://jamiedavenport.dev',
  feed_url: 'https://jamiedavenport.dev/feed.xml',
})

const addPosts = async () => {
  const posts = await getPosts()

  posts.forEach(({ title, slug, date, description }) => {
    feed.item({
      title,
      guid: slug,
      url: `https://jamiedavenport.dev/blog/${slug}`,
      date,
      description,
    })
  })
}

addPosts().then(() => {
  fs.writeFileSync('./out/feed.xml', feed.xml({ indent: true }))
})
