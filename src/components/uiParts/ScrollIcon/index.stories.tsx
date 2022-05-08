import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ScrollIcon } from '.';

const Template: ComponentStory<typeof ScrollIcon> = (args) => <ScrollIcon {...args} />;
const defaultArgs = {};

export const Default = Template.bind({});

export default {
  component: ScrollIcon,
  title: 'Components/ScrollIcon',
} as ComponentMeta<typeof ScrollIcon>;
Default.storyName = 'スクロールアイコン';
Default.args = defaultArgs;
