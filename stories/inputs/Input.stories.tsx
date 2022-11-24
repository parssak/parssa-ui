import React from 'react';
import StoryLayout from '../utils/StoryLayout';
import { Input } from '../../src';

export default {
  component: Input,
};

const Template = args => (
  <StoryLayout>
    <Input {...args} />
  </StoryLayout>
);

export const Basic = Template.bind({});
Basic.args = {};
