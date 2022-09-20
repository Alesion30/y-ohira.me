import {
  TypingTextPresenter,
  TypingTextProps,
} from '~/components/uiParts/TypingText/presenter'

export const TypingText: React.FC<TypingTextProps> = (props) => {
  return <TypingTextPresenter {...props} />
}
