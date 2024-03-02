import { type IFlexProps } from './flex.types';
import { core2 } from '../core2';

const flex = core2<IFlexProps>({
  $flex: { property: 'flex', isNumber: true },
  $flexDir: { property: 'flex-direction' },
  $flexGrow: { property: 'flex-grow', isNumber: true },
  $flexWrap: { property: 'flex-wrap' },
  $gap: { property: 'gap', scale: 'spacing' },
  $alignItems: { property: 'align-items' },
  $justifyContent: { property: 'justify-content' },
});

export default flex;
