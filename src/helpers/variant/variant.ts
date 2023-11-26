import { type IVariantFunctionProps } from './variant.types';
import type IThemeVariant from '../../types/IThemeVariant';

const variant =
  ({ themeProperty, prop = 'variant' }: IVariantFunctionProps) =>
  (props: Record<string, unknown> & IThemeVariant) => {
    const themeObject = props?.theme?.[themeProperty];
    const propValue = props[prop] as string;

    if (themeObject != null) {
      return themeObject[propValue];
    }
  };
export default variant;
