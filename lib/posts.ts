import fs from "fs-extra";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";

export interface Post {
  title: string;
  description: string;
  date: string; // FIXME: Or String or whatever
  body: string;
}

export const getPostPaths = async (): Promise<Array<string>> => {
  const files = await fs.readdirSync("posts");
  return files.map((f) => f.split(".")[0]).map((f) => `/blog/${f}`);
};

export const getPost = async (slug: string): Promise<Post> => {
  const postBody = await fs.readFile(`posts/${slug}.mdx`);
  const { content, data } = matter(postBody);
  const mdxSource = await renderToString(content);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    body: mdxSource,
  };
};
