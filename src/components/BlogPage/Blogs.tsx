import React from "react";
import BlogCard from "./BlogCard";
import "./Blogs.css";
import { motion } from "framer-motion";
import { BlogPosts, PostProps } from "../../models/post";

const Blogs = ({ posts }: BlogPosts) => (
  <motion.div
    id="blogs"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {
        scale: 1,
        y: 50,
        opacity: 0,
      },
      visible: {
        scale: 1,
        y: 0,
        opacity: 1,
      },
    }}
  >
    <h1>Read Something</h1>
    <div className="blogs-grid">
      {posts.map((post: PostProps) => (
        <BlogCard key={post.node.fields.slug} post={post} />
      ))}
    </div>
  </motion.div>
);

export default Blogs;
