import { FC } from 'react'

export type SpacerProps = {
  height?: number
  width?: number
}

export const Spacer: FC<SpacerProps> = ({ height, width }) => {
  return <div style={{ height, width }} />
}
