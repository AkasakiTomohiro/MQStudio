import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FolderMenuItem, IFolderMenuItemProps } from './FolderMenuItem';

export default {
  title    : 'MQStudio/L3/FolderMenuItem',
  component: FolderMenuItem
} as Meta;

const Template: Story<IFolderMenuItemProps> = (args: any) => <FolderMenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'reference',
  child: [
    {
      title: 'child',
      icon : <FolderOpenIcon />
    }
  ]
};
