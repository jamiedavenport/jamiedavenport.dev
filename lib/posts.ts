import fs from "fs-extra";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: Date;
}

export interface Post extends PostMeta {
  body: string;
}

const getSlug = (f: string) => f.split(".")[0];

export const getPostPaths = async (): Promise<Array<string>> => {
  const files = await fs.readdirSync("posts");
  return files.map(getSlug).map((f) => `/blog/${f}`);
};

export const getPosts = async (): Promise<Array<Post>> => {
  const files = await fs.readdirSync("posts");

  return Promise.all(files.map(getSlug).map(getPost)); //FIXME: Could be more efficient
};

export const getPost = async (slug: string): Promise<Post> => {
  const postBody = await fs.readFile(`posts/${slug}.mdx`);
  const { content, data } = matter(postBody);
  const mdxSource = await renderToString(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    body: mdxSource,
  };
};
