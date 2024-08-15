import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image";
import "./BlogCard.css";
import { PostProps } from "../../models/post";

const BlogCard = ({ post }: PostProps) => {
  const { title, date, featuredImage, description, tags } =
    post.node.frontmatter;
  const { timeToRead } = post.node;
  const { slug } = post.node.fields;

  // Optional chaining to safely access properties
  const image = featuredImage && getImage(featuredImage);

  if (!image) {
    return null;
  }

  const imageProps: GatsbyImageProps = {
    image,
    alt: title,
    title: title,
  };

  return (
    <div className="blog-card">
      <div>
        <Link to={`${slug}`}>
          <GatsbyImage {...imageProps} />
        </Link>
        <div className="blog-details">
          <small className="timeToRead">{`🕑 ${timeToRead} minute read`}</small>
          <h3>
            <Link to={`${slug}`}>{title}</Link>
          </h3>
          <small className="date">{date}</small>
          <p>{description}</p>
        </div>
      </div>
      <ul className="tags blog-tags">
        {tags.map((tag: string) => (
          <li key={tag} className="tag">
            <small>{tag}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCard;
