import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./BlogCard.css";

const BlogCard = ({ post }: any) => {
  const { title, date, featuredImage, description, tags } =
    post.node.frontmatter;
  const { slug } = post.node.fields;

  return (
    <div className="blog-card">
      <div>
        <Link to={`${slug}`}>
          <GatsbyImage
            image={getImage(featuredImage)}
            alt={title}
            title={title}
          />
        </Link>
        <div className="blog-details">
          <small className="timeToRead">{`> ${post.node.timeToRead} minute read`}</small>
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
