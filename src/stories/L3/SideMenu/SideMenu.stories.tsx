import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { ISideMenuProps, SideMenu } from './SideMenu';

export default {
  title    : 'MQStudio/L3/SideMenu/SideMenu',
  component: SideMenu
} as Meta;

const Template: Story<ISideMenuProps> = (args: any) => <SideMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  child: [
    {
      title      : 'Paths',
      child      : [],
      defaultOpen: true
    },
    {
      title      : 'Models',
      child      : [],
      defaultOpen: true
    },
    {
      title      : 'Parameters',
      child      : [],
      defaultOpen: true
    },
    {
      title      : 'Examples',
      child      : [],
      defaultOpen: true
    }
  ]
};
