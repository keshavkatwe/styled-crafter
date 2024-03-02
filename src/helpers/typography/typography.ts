import { core2 } from '../core2';
import { type ITypographyProps } from './typography.types';

const Typography = core2<ITypographyProps>({
  $textAlign: { property: 'text-align' },
  $letterSpacing: { property: 'letter-spacing' },
});

export default Typography;
