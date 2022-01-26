import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container, ContainerProps } from '.';

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;
const defaultArgs: ContainerProps = {
  children: <h1>コンテナです</h1>,
};

export const Default = Template.bind({});
Default.storyName = 'コンテナ';
Default.args = defaultArgs;
