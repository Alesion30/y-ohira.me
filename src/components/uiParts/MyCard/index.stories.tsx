import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyCard } from '.';
import { MyCardProps } from './presenter';

export default {
  title: 'Components/MyCard',
  component: MyCard,
} as ComponentMeta<typeof MyCard>;

const Template: ComponentStory<typeof MyCard> = (args) => <MyCard {...args} />;
const defaultArgs: MyCardProps = {
  children: (
    <div style={{ padding: 10 }}>
      <p>カードです</p>
    </div>
  ),
};

export const Default = Template.bind({});
Default.storyName = 'カード';
Default.args = defaultArgs;
