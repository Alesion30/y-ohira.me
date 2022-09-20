import dynamic from 'next/dynamic'

import { OpeningLayoutProps } from './presenter'
const OpeningLayoutPresenter = dynamic(
  async () => (await import('./presenter')).OpeningLayoutPresenter,
  {
    ssr: false,
  }
)

export const OpeningLayout: React.FC<OpeningLayoutProps> = (props) => {
  return <OpeningLayoutPresenter {...props} />
}
