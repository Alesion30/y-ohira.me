import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Container, ContainerProps } from '.';

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;
const defaultArgs: ContainerProps = {
  children: <h1>コンテナです</h1>,
};

export const Default = Template.bind({});

export default {
  component: Container,
  title: 'Components/Container',
} as ComponentMeta<typeof Container>;
Default.storyName = 'コンテナ';
Default.args = defaultArgs;
