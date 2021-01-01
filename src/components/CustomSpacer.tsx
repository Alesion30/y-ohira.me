import { FC } from 'react';

interface Props {
  height: number;
}

const CustomSpacer: FC<Props> = ({ height }) => {
  return <div style={{ height }} />;
};

export default CustomSpacer;
