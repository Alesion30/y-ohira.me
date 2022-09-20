export type SpacerProps = {
  height: number
}

export const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return <div style={{ height }} />
}
