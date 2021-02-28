import React from 'react';
import { NextPage, NextPageContext } from 'next';
import ErrorPageLayout from '~/layouts/error';

interface ErrorProps {
  statusCode: number;
}
const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return <ErrorPageLayout statusCode={statusCode} />;
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
