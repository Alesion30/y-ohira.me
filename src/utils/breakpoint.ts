import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const breakpoint = (key: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'): boolean => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(key));
  return matches;
};

export default breakpoint;
