import { MyCardPresenter, MyCardProps } from './presenter'

export const MyCard: React.FC<MyCardProps> = (props) => {
  return <MyCardPresenter {...props} />
}
