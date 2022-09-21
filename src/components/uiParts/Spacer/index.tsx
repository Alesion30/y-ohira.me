import { FC } from 'react'

export type SpacerProps = {
  height: number
}

export const Spacer: FC<SpacerProps> = ({ height }) => {
  return <div style={{ height }} />
}
