export type PostProps = {
  post: {
    node: {
      frontmatter: {
        title: string;
        date: string;
        featuredImage: object;
        description: string;
        tags: string[];
        timeToRead: string;
      };
      fields: {
        slug: string;
      };
    };
  };
};

export type BlogPosts = {
  posts: PostProps[];
};
