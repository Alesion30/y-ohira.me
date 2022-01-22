import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CaptionImage } from '.';
import { CaptionImageProps } from './presenter';
import AweconImage from '../../../../public/images/product/awecon.png';

export default {
  title: 'Components/CaptionImage',
  component: CaptionImage,
} as ComponentMeta<typeof CaptionImage>;

const Template: ComponentStory<typeof CaptionImage> = (args) => <CaptionImage {...args} />;
const defaultArgs: CaptionImageProps = {
  title: 'AWECON',
  description: 'エアコンのリモート制御アプリ',
  src: AweconImage,
  width: 400,
  height: 400 * 0.75,
};

export const Default = Template.bind({});
Default.storyName = 'キャプション付き画像';
Default.args = defaultArgs;
