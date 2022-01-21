import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ScrollIcon } from '.';
import { ScrollIconProps } from './presenter';

export default {
  title: 'Components/ScrollIcon',
  component: ScrollIcon,
} as ComponentMeta<typeof ScrollIcon>;

const Template: ComponentStory<typeof ScrollIcon> = (args) => <ScrollIcon {...args} />;
const defaultArgs: ScrollIconProps = {};

export const Default = Template.bind({});
Default.storyName = 'スクロールアイコン';
Default.args = defaultArgs;
