import { VantaCloudLayoutPresenter, VantaCloudLayoutProps } from './presenter';

export const VantaCloudLayout: React.VFC<VantaCloudLayoutProps> = (props) => {
  return <VantaCloudLayoutPresenter {...props} />;
};
