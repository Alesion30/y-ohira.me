import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StarsProps } from './presenter';

import { Stars } from '.';

export const Default = Template.bind({});

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;
const defaultArgs: StarsProps = {
  star: 4,
};

export default {
  component: Stars,
  title: 'Components/Stars',
} as ComponentMeta<typeof Stars>;
Default.storyName = 'スター';
Default.args = defaultArgs;
