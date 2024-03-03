import { type ISize } from '../../types/IScale';

type IOverflow = 'visible' | 'hidden' | 'scroll';
type IDisplay = 'flex' | 'none';
export interface ILayoutProps {
  $height?: ISize;
  $width?: ISize;
  $minHeight?: ISize;
  $maxHeight?: ISize;
  $minWidth?: ISize;
  $maxWidth?: ISize;
  $size?: ISize;
  $overflow?: IOverflow;
  $overflowX?: IOverflow;
  $overflowY?: IOverflow;
  $display?: IDisplay;
}
