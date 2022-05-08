import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SectionTitleProps } from './presenter';

import { SectionTitle } from '.';

const Template: ComponentStory<typeof SectionTitle> = (args) => <SectionTitle {...args} />;
const defaultArgs: SectionTitleProps = {
  description: '経歴',
  title: 'PROFILE',
};

export const Default = Template.bind({});

export default {
  component: SectionTitle,
  title: 'Components/SectionTitle',
} as ComponentMeta<typeof SectionTitle>;
Default.storyName = '各セクションのタイトル';
Default.args = defaultArgs;
