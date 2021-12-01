import React from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

import { IMenuItemProps, MenuItem } from './MenuItem';

export interface IFolderMenuItemProps {

  title: string;

  child: IMenuItemProps[]
}

/**
 * Primary UI component for user interaction
 */
export const FolderMenuItem = (props: IFolderMenuItemProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const onClick = (): void => {
    setOpen(!open);
  };

  const icon = open ? <FolderOpenIcon /> : <FolderIcon />;
  
  return (
    <>
      <MenuItem title={props.title} onClick={onClick} icon={icon} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.child?.map(m => <MenuItem {...m} sx={{ pl: 4 }} />)}
        </List>
      </Collapse>
    </>
  );
};
