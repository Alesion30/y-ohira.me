import React, { FC } from 'react';
import FooterStyle from '~/styles/components/Footer.module.scss';
import Grid from '@material-ui/core/Grid';

const Footer: FC = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <footer className={FooterStyle.footer}>
        <p>&#64;2021 Yuta Ohira</p>
      </footer>
    </Grid>
  );
};

export default Footer;
