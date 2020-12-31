import React, { FC } from 'react';
import FooterStyle from '~/styles/components/Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={FooterStyle.footer}>
      <p>&#64;2021 Ohira's Portfolio</p>
    </footer>
  );
};

export default Footer;
