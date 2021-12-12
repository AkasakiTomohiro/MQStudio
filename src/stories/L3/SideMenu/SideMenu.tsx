
/*
 * export interface ISideMenuProps {
 * }
 */

import React from 'react';

import { styled } from '@mui/lab/node_modules/@mui/system';
import MuiDrawer from '@mui/material/Drawer';

import { FolderMenuItem } from '../FolderMenuItem';
import { Overview } from './Overview';

const Root = styled(MuiDrawer)({
  width    : 'calc(100% - 260px)',
  position : 'relative',
  overflowX: 'hidden'
});
const MuiOverview = styled(Overview)({
  position: 'absolute',
  bottom  : 0,
  width   : '100%'
});

/**
 * Primary UI component for user interaction
 */
export const SideMenu = (): JSX.Element => {
  const [open, setOpen] = React.useState(true);

  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <Root variant="permanent">
      <FolderMenuItem title="mqstudio" child={[]} />
      {open && <MuiOverview fileName="test.yaml" closeButtonClick={onClose} />}
    </Root>
  );
};
