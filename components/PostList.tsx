import React from "react";
import { PostMeta } from "lib/posts";
import PostLink from "./PostLink";

type Props = {
  posts: PostMeta[];
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <PostLink key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;
