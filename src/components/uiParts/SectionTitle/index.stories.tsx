import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SectionTitle } from '.';
import { SectionTitleProps } from './presenter';

export default {
  title: 'Components/SectionTitle',
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

const Template: ComponentStory<typeof SectionTitle> = (args) => <SectionTitle {...args} />;
const defaultArgs: SectionTitleProps = {
  title: 'PROFILE',
  description: '経歴',
};

export const Default = Template.bind({});
Default.storyName = '各セクションのタイトル';
Default.args = defaultArgs;
