import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return <p>Page Not Found</p>;
};

// export async function getStaticProps() {
//   return {
//     redirect: {
//       permanent: false,
//       destination: '/'
//     }
//   };
// }

export default NotFound;
