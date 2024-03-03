import { core } from '../core';
import { type IPositionProps } from './position.types';

const position = core<IPositionProps>({
  $position: { property: 'position' },
  $zIndex: { property: 'z-index', isNumber: true },
  $top: { property: 'top', scale: 'spacing' },
  $bottom: { property: 'bottom', scale: 'spacing' },
  $left: { property: 'left', scale: 'spacing' },
  $right: { property: 'right', scale: 'spacing' },
});

export default position;
