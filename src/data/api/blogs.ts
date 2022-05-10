import { gql, useQuery } from '@apollo/client';

import { Blogs } from '../model/blog';

import { apolloClient } from '~/plugins/apollo';

const QUERY = gql`
  query {
    blogs {
      id
      title
      link
      image {
        url
        height
        width
      }
      createdAt
    }
  }
`;

type BlogData = {
  blogs: Blogs;
};

/** ブログ一覧を取得 */
export const getBlogs = () => {
  return apolloClient.query<BlogData>({
    query: QUERY,
  });
};

/** ブログ一覧を取得（hook版） */
export const useQueryBlogs = () => {
  return useQuery<BlogData>(QUERY);
};
