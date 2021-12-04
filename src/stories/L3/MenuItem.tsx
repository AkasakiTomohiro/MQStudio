import React from 'react';

// import { blue } from '@mui/material/colors';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export interface IMenuItemProps {
  
  /**
   * アイコン
   */

  icon: React.ReactNode;

  /**
   * タイトル
   */

  title: string;

  /**
   * 選択しているか
   */
  selected?: boolean;

  /**
   * ホバー時に表示したいコンテンツ
   * children要素にListItemSecondaryActionを含むときは使用しないこと
   */
  children?: React.ReactNode;

  /**
   * クリックイベント
   */
  onClick?: () => void;

  /**
   * CSS
   */
  sx?: SxProps<Theme>;
}

const Hover = styled('div')({
  '&:hover': {
    backgroundColor: 'rgba(25,118,210,0.08)'
  },
  position: 'relative'
});
const MuiListItem = styled(ListItem)({
  button: true
});
const HoverCard = styled('div')({
  width   : '100%',
  height  : '100%',
  position: 'absolute'
});
const SideColor = styled('div')(({ theme }) => ({
  width          : 4,
  height         : '100%',
  position       : 'absolute',
  backgroundColor: theme.palette.secondary.main
}));

/**
 * Primary UI component for user interaction
 */
export const MenuItem = (props: IMenuItemProps): JSX.Element => {
  const [hover, setHover] = React.useState(false);

  const mouseOver = (): void => {
    setHover(true);
  };

  const mouseLeave = (): void => {
    setHover(false);
  };

  return (
    <Hover
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
    >
      { props.selected && <SideColor /> }
      <MuiListItem 
        onClick={props.onClick} 
        sx={props.sx} 
        selected={props.selected}
      >
        <HoverCard />
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.title} />
        {

          props.children &&
          <ListItemSecondaryAction>
            {
              hover && props.children
            }
          </ListItemSecondaryAction>
        }
      </MuiListItem>
    </Hover>
  );
};
