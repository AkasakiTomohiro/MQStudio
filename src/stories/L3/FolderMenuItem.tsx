import React from 'react';

import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

import { IMenuItemProps, MenuItem } from './MenuItem';

export interface IFolderMenuItemProps {

  /**
   * タイトル
   */
  title: string;

  /**
   * 子要素のリスト
   */
  child: IMenuItemProps[]

  /**
   * ホバー時に表示したいコンテンツ
   * children要素にListItemSecondaryActionを含むときは使用しないこと
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const FolderMenuItem = (props: IFolderMenuItemProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onClick = (): void => {
    setOpen(!open);
  };

  const icon = open ? <FolderOpenIcon /> : <FolderIcon />;

  const handleListItemClick = (index: number): () => void => {
    return (): void => setSelectedIndex(index);
  };

  return (
    <>
      <MenuItem title={props.title} onClick={onClick} icon={icon} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="nav" disablePadding>
          {
            props.child?.map((m, i) => 
              <MenuItem 
                {...m} 
                sx={{ pl: 4 }} 
                onClick={handleListItemClick(i)} 
                selected={i === selectedIndex} 
              >
                {props.children}
              </MenuItem>)
          }
        </List>
      </Collapse>
    </>
  );
};
