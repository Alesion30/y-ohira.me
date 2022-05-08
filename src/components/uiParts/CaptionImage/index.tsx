import { CaptionImagePresenter, CaptionImageProps } from './presenter';

export const CaptionImage: React.FC<CaptionImageProps> = (props) => {
  return <CaptionImagePresenter {...props} />;
};
