import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Work Sans","M PLUS Rounded 1c","sans-serif"',
  },
  palette: {
    primary: {
      main: '#008CD6',
      contrastText: '#fff',
    },
  },
});

export default theme;
