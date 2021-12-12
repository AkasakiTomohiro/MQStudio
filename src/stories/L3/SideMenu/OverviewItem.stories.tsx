import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { IOverviewItemProps, OverviewItem } from './OverviewItem';

export default {
  title    : 'MQStudio/L3/SideMenu/OverviewItem',
  component: OverviewItem
} as Meta;

const Template: Story<IOverviewItemProps> = (args: any) => <OverviewItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Paths',
  child: [
    {
      title: 'aa',
      key  : 'aa'
    },
    {
      title: 'bb',
      key  : 'bb'
    },
    {
      title: 'cc',
      key  : 'cc'
    }
  ]
};
