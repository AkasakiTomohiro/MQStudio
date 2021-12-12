import React from 'react';

import styled from '@emotion/styled';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

import { FolderMenuItem, IFolderMenuItemProps } from '../FolderMenuItem';

export type IOverviewItemProps = Pick<IFolderMenuItemProps, 'child' | 'title'>;

const HoverRoot = styled('div')({
  position: 'relative'
});

/**
 * Primary UI component for user interaction
 */
export const OverviewItem = (props: IOverviewItemProps): JSX.Element => {
  const [child, setChild] = React.useState(props.child);

  const HoverMenu = (hoverProps: { index?: number, maxSize?: number }): JSX.Element => {

    // 配列要素を１つ上にあげる
    const hoverMenuUpwardClick = (): void => {
      if(hoverProps.index === undefined) {
        return;
      }
      const array = child.slice(0, child.length);
      array.splice(hoverProps.index - 1, 2, array[hoverProps.index], array[hoverProps.index - 1]);
      setChild(array);
    };

    // 配列要素を１つ下にさげる
    const hoverMenuDownwardClick = (): void => {
      if(hoverProps.index === undefined) {
        return;
      }
      const array = child.slice(0, child.length);
      array.splice(hoverProps.index, 2, array[hoverProps.index + 1], array[hoverProps.index]);
      setChild(array);
    };

    // 配列要素をコピー
    const hoverMenuCopyClick = (): void => {

      // TODO: 配列要素をコピー機能を実装
    };
    
    return (
      <HoverRoot>
        <IconButton disabled={hoverProps.index === 0} onClick={hoverMenuUpwardClick}><ArrowUpwardIcon/></IconButton>
        <IconButton 
          disabled={hoverProps.maxSize !== undefined && hoverProps.index === (hoverProps.maxSize - 1)}
          onClick={hoverMenuDownwardClick}
        >
          <ArrowDownwardIcon/>
        </IconButton>
        <IconButton onClick={hoverMenuCopyClick}><ContentCopyIcon /></IconButton>
      </HoverRoot>
    );
  };

  return (
    <FolderMenuItem 
      title={props.title} 
      child={child} 
      defaultOpen={true} 
      children={<HoverMenu maxSize={props.child.length} />} 
    />
  );
};
