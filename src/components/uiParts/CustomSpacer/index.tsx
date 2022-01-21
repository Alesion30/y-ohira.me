import { FC } from 'react';

interface Props {
  height: number;
}

export const CustomSpacer: FC<Props> = ({ height }) => {
  return <div style={{ height }} />;
};
