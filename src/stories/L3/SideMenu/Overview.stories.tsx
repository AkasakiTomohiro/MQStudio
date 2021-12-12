import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { IOverviewProps, Overview } from './Overview';

export default {
  title    : 'MQStudio/L3/SideMenu/Overview',
  component: Overview
} as Meta;

const Template: Story<IOverviewProps> = (args: any) => <Overview {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fileName: 'test.yaml'
};
