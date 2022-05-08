import { ComponentMeta, ComponentStory } from '@storybook/react';

import AweconImage from '../../../../public/images/product/awecon.png';

import { CaptionImageProps } from './presenter';

import { CaptionImage } from '.';

const Template: ComponentStory<typeof CaptionImage> = (args) => <CaptionImage {...args} />;
const defaultArgs: CaptionImageProps = {
  description: 'エアコンのリモート制御アプリ',
  height: 400 * 0.75,
  src: AweconImage,
  title: 'AWECON',
  width: 400,
};

export const Default = Template.bind({});

export default {
  component: CaptionImage,
  title: 'Components/CaptionImage',
} as ComponentMeta<typeof CaptionImage>;
Default.storyName = 'キャプション付き画像';
Default.args = defaultArgs;
