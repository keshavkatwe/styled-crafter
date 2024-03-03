import { type IFlexProps } from './flex.types';
import { core } from '../core';

const flex = core<IFlexProps>({
  $flex: { property: 'flex', isNumber: true },
  $flexDir: { property: 'flex-direction' },
  $flexGrow: { property: 'flex-grow', isNumber: true },
  $flexWrap: { property: 'flex-wrap' },
  $gap: { property: 'gap', scale: 'spacing' },
  $alignItems: { property: 'align-items' },
  $justifyContent: { property: 'justify-content' },
});

export default flex;
