import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { SamplePage } from './SamplePage';

export default {
  title    : 'MQStudio/L5/SamplePage',
  component: SamplePage
} as Meta;

const Template: Story = (args: any) => <SamplePage {...args} />;

export const Primary = Template.bind({});
