import React from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export interface IMenuItemProps {
  icon: React.ReactNode

  title: string

  onClick?: () => void

  sx?: SxProps<Theme>;
}

/**
 * Primary UI component for user interaction
 */
export const MenuItem = (props: IMenuItemProps): JSX.Element => {
  
  return (
    <ListItemButton onClick={props.onClick} sx={props.sx}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItemButton>
  );
};
