import { DefaultLayoutPresenter, DefaultLayoutProps } from './presenter'

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  return <DefaultLayoutPresenter {...props} />
}
