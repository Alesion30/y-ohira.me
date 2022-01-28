import { gql, useQuery } from '@apollo/client';
import { apolloClient } from '~/plugins/apollo';
import { Blog } from '../model/blog';

const QUERY = gql`
  query ($id: ID!) {
    blog(where: { id: $id }) {
      id
      title
      link
      image {
        url
        height
        width
      }
      content
      createdAt
    }
  }
`;

type BlogData = {
  blog: Blog;
};

/** ブログ情報を取得 */
export const getBlog = (id: string) => {
  return apolloClient.query<BlogData>({
    query: QUERY,
    variables: { id },
  });
};

/** ブログ情報を取得（hook版） */
export const useQueryBlog = (id: string) => {
  return useQuery<BlogData>(QUERY, {
    variables: { id },
  });
};
