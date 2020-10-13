import fs from "fs-extra";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";
import rehypePrism from "@mapbox/rehype-prism";
import visit from "unist-util-visit";
import components from "components/blog/components";

const tokenClassNames = {
  tag: "text-code-red",
  "attr-name": "text-code-yellow",
  "attr-value": "text-code-green",
  deleted: "text-code-red",
  inserted: "text-code-green",
  punctuation: "text-code-white",
  keyword: "text-code-purple",
  string: "text-code-green",
  function: "text-code-blue",
  boolean: "text-code-red",
  comment: "text-gray-400 italic",
};

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: Date;
  image: string;
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
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        rehypePrism,
        () => {
          return (tree) => {
            visit(tree, "element", (node) => {
              let [token, type] = (node.properties as any).className || [];
              if (token === "token") {
                (node.properties as any).className = [tokenClassNames[type]];
              }
            });
          };
        },
      ],
    },
  });

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    body: mdxSource,
    image: data.image,
  };
};
