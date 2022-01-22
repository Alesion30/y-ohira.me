import { CaptionImagePresenter, CaptionImageProps } from './presenter';

export const CaptionImage: React.VFC<CaptionImageProps> = (props) => {
  return <CaptionImagePresenter {...props} />;
};
