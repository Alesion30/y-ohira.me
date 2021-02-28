import { NextPage } from 'next';
import ErrorPageLayout from '~/layouts/error';

const NotFound: NextPage = () => {
  return <ErrorPageLayout statusCode={404} errorMessage="お探しのページは見つかりませんでした" />;
};

export default NotFound;
