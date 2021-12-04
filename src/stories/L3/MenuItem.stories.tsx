import React from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { Meta, Story } from '@storybook/react/types-6-0';

import { IMenuItemProps, MenuItem } from './MenuItem';

export default {
  title    : 'MQStudio/L3/MenuItem',
  component: MenuItem
} as Meta;

const Template: Story<IMenuItemProps> = (args: any) => <List><MenuItem {...args} /></List>;

export const Primary = Template.bind({});
Primary.args = {
  icon : <FolderIcon />,
  title: 'reference',
  
  children: <IconButton onClick={async () => {}} ><StarIcon/></IconButton>
};
