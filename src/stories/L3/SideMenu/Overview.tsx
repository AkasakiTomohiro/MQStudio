import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';

import { MenuItem } from '../MenuItem';
import { OverviewItem } from './OverviewItem';

export interface IOverviewProps {

  /**
   * ファイル名
   */
  fileName: string;

  closeButtonClick: () => void;

}

const Header = styled('div')({
  position: 'relative'
});
const CloseButton = styled(IconButton)({
  top     : 0,
  right   : 0,
  position: 'absolute'
});

/**
 * Primary UI component for user interaction
 */
export const Overview = (props: IOverviewProps): JSX.Element => {
  const buff = props.fileName.split('.');
  const fileName = buff.slice(0, buff.length - 1).join('.');

  // TODO: props.fileNameをもとにファイルを読み出し、Path情報などを表示機能を実装

  return (
    <>
      <Header>
        <Typography variant="overline" display="block">{fileName}</Typography>
        <CloseButton onClick={props.closeButtonClick} size="small"><CloseIcon fontSize="small" /></CloseButton>
      </Header>
      <List>
        <MenuItem title="Broker Overview" icon={<StarIcon/>} key="overview" />
        <OverviewItem title="Paths" child={[]} />
        <OverviewItem title="Models" child={[]} />
        <OverviewItem title="Parameters" child={[]} />
        <OverviewItem title="Examples" child={[]} />
      </List>
    </>
  );
};
