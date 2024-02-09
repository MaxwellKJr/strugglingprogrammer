import { IGatsbyImageData } from "gatsby-plugin-image";

export type PostProps = {
  post: {
    node: {
      frontmatter: {
        title: string;
        date: string;
        featuredImage: IGatsbyImageData | null;
        description: string;
        tags: string[];
      };
      fields: {
        slug: string;
      };
      timeToRead: string;
    };
  };
};

export type BlogPosts = {
  posts: PostProps[];
};
