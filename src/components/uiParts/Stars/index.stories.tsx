import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stars } from '.';
import { StarsProps } from './presenter';

export default {
  title: 'Components/Stars',
  component: Stars,
} as ComponentMeta<typeof Stars>;

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;
const defaultArgs: StarsProps = {
  star: 4,
};

export const Default = Template.bind({});
Default.storyName = 'スター';
Default.args = defaultArgs;
