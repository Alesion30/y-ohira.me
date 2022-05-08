import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyCardProps } from './presenter';

import { MyCard } from '.';

const Template: ComponentStory<typeof MyCard> = (args) => <MyCard {...args} />;
const defaultArgs: MyCardProps = {
  children: (
    <div style={{ padding: 10 }}>
      <p>カードです</p>
    </div>
  ),
};

export const Default = Template.bind({});

export default {
  component: MyCard,
  title: 'Components/MyCard',
} as ComponentMeta<typeof MyCard>;
Default.storyName = 'カード';
Default.args = defaultArgs;
