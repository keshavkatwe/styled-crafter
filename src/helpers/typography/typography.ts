import { core } from '../core';
import { type ITypographyProps } from './typography.types';

const Typography = core<ITypographyProps>({
  $textAlign: { property: 'text-align' },
  $letterSpacing: { property: 'letter-spacing' },
});

export default Typography;
