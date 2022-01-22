export type SpacerProps = {
  height: number;
};

export const Spacer: React.VFC<SpacerProps> = ({ height }) => {
  return <div style={{ height }} />;
};
