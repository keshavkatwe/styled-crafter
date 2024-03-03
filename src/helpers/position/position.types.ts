import { type ISpacing } from '../../types/IScale';

type IPosition = 'absolute' | 'relative';
export interface IPositionProps {
  $position?: IPosition;
  $zIndex?: number;
  $top?: ISpacing;
  $bottom?: ISpacing;
  $left?: ISpacing;
  $right?: ISpacing;
}
