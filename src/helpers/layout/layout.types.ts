import type { DefaultCrafter } from 'styled-crafter';
import type ITheme from '../../types/ITheme';

type ISize = DefaultCrafter['sizes'];
type IOverflow = 'visible' | 'hidden' | 'scroll';
export interface ILayoutProps extends ITheme {
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
}
