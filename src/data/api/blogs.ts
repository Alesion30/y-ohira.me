import { gql, useQuery } from '@apollo/client';
import { Blogs } from '../model/blog';

const QUERY = gql`
  query MyQuery {
    blogs {
      id
      title
      createdAt
    }
  }
`;

type BlogData = {
  blogs: Blogs;
};

export const useQueryBlogs = () => {
  return useQuery<BlogData>(QUERY);
};
