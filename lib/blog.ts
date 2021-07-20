import path from "path";
import { readdir, readFile } from "fs-extra";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "posts");

export type PostFrontMatter = {
  slug: string;
  title: string;
  description: string;
};

export type PostSource = {
  code: string;
  frontmatter: PostFrontMatter;
};

export const getPost = async (slug: string): Promise<PostSource> => {
  const mdxSource = await readFile(`${postsPath}/${slug}.mdx`, "utf-8");
  const mdx = await bundleMDX(mdxSource, {
    files: {
      // TODO: Load these files from the filesystem
    },
  });

  return mdx as any; // TODO: Validate the frontmatter object and narrow the type
};

export const getPosts = async (): Promise<PostFrontMatter[]> => {
  const rawFiles = await readdir(postsPath);

  const files = rawFiles.map(async (file) => {
    const mdxSource = await readFile(`${postsPath}/${file}`);
    const { data } = matter(mdxSource);
    const slug = file.split(".")[0];

    return { slug, ...data };
  });

  return Promise.all(files) as any;
};
