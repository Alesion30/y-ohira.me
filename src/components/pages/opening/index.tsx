import {
  OpeningPresenter,
  OpeningProps,
} from '~/components/pages/opening/presenter'

export const OpeningPage: React.FC<OpeningProps> = (props) => {
  return <OpeningPresenter {...props} />
}
