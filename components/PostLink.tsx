import React from "react";
import { PostMeta } from "lib/posts";
import Link from "next/link";
import format from "date-fns/format";

type Props = {
  post: PostMeta;
};

const PostLink: React.FC<Props> = ({ post }) => {
  const { title, description, slug, date } = post;

  const dateStr = format(date, "EEEE, do MMMM y");

  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <a className="md:flex md:flex-row md:justify-between">
        <div>
          <p className="text-gray-700 text-sm mb-2">{dateStr}</p>
          <h3 className="text-2xl font-bold font-mono leading-none mb-3">
            {title}
          </h3>
          <p className="text-gray-700 leading-none mb-3 md:mb-0">
            {description}
          </p>
        </div>
        <span className="text-blue-500">Read More →</span>
      </a>
    </Link>
  );
};

export default PostLink;
