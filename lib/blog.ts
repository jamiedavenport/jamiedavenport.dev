import path from "path";
import { readdir, readFile } from "fs-extra";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import { remarkMdxImages } from "remark-mdx-images";
import rehypePrism from "@mapbox/rehype-prism";
import visit from "unist-util-visit";

const postsPath = path.join(process.cwd(), "posts");

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
  const mdxSource = await readFile(
    path.join(postsPath, slug, "index.mdx"),
    "utf-8"
  );

  const mdx = await bundleMDX(mdxSource, {
    cwd: path.join(postsPath, slug),
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrism,
        () => {
          return (tree) => {
            visit(tree, "element", (node) => {
              const [token, type] = (node.properties as any).className || [];
              if (token === "token") {
                (node.properties as any).className = [tokenClassNames[type]];
              }
            });
          };
        },
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.outdir = path.join(process.cwd(), "public", "blog", "images");
      options.loader = {
        ...options.loader,
        ".png": "file",
      };
      options.publicPath = "/blog/images";
      options.write = true;

      return options;
    },
  });

  return mdx as any; // TODO: Validate the frontmatter object and narrow the type
};

export const getPosts = async (): Promise<PostFrontMatter[]> => {
  const rawFiles = await readdir(postsPath);

  const files = rawFiles.map(async (slug) => {
    const mdxSource = await readFile(path.join(postsPath, slug, "index.mdx"));
    const { data } = matter(mdxSource);

    return { slug, ...data };
  });

  return Promise.all(files) as any;
};
