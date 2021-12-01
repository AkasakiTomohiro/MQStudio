import React from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import { Meta, Story } from '@storybook/react/types-6-0';

import { IMenuItemProps, MenuItem } from './MenuItem';

export default {
  title    : 'MQStudio/L3/MenuItem',
  component: MenuItem
} as Meta;

const Template: Story<IMenuItemProps> = (args: any) => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon : <FolderIcon />,
  title: 'reference'
};
