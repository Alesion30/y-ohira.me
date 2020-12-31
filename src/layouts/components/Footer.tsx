import React, { FC } from 'react';
import FooterStyle from '~/styles/Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={FooterStyle.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
      </a>
    </footer>
  );
};

export default Footer;
