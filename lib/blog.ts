import path from "path";
import { readdir, readFile } from "fs-extra";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import { remarkMdxImages } from "remark-mdx-images";
import rehypePrism from "@mapbox/rehype-prism";
import { rehypeSyntaxClassNames } from "./rehype";
import * as yup from "yup";

const postsPath = path.join(process.cwd(), "posts");

const frontmatterSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
});

export type PostFrontmatter = yup.Asserts<typeof frontmatterSchema>;

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  published?: Date;
};

export type PostSource = {
  code: string;
  meta: PostMeta;
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
        remarkMdxImages as any,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrism,
        rehypeSyntaxClassNames,
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

  const frontmatter: PostFrontmatter = frontmatterSchema.validateSync(
    mdx.frontmatter
  );

  return {
    code: mdx.code,
    meta: {
      slug,
      ...frontmatter,
    },
  }; // TODO: Validate the frontmatter object and narrow the type
};

export const getPosts = async (): Promise<PostMeta[]> => {
  const rawFiles = await readdir(postsPath);

  const files = rawFiles.map(async (slug) => {
    const mdxSource = await readFile(path.join(postsPath, slug, "index.mdx"));
    const { data } = matter(mdxSource);

    return { slug, ...data };
  });

  return Promise.all(files) as any;
};
