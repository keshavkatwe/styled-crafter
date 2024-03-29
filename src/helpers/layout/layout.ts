import { core } from '../core';
import { type ILayoutProps } from './layout.types';

const layout = core<ILayoutProps>({
  $height: { property: 'height', scale: 'sizes' },
  $minHeight: { property: 'min-height', scale: 'sizes' },
  $maxHeight: { property: 'max-height', scale: 'sizes' },
  $width: { property: 'width', scale: 'sizes' },
  $minWidth: { property: 'min-width', scale: 'sizes' },
  $maxWidth: { property: 'max-width', scale: 'sizes' },
  $size: { properties: ['height', 'width'], scale: 'sizes' },
  $overflow: { property: 'overflow' },
  $overflowX: { property: 'overflow-x' },
  $overflowY: { property: 'overflow-Y' },
  $display: { property: 'display' },
});
export default layout;
