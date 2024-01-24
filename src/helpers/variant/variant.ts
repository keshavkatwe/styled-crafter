import { type IVariantFunctionProps } from './variant.types';
import type IThemeVariant from '../../types/IThemeVariant';
import type ICssValue from '../../types/ICssValue';

const variant =
  ({ themeProperty, prop = 'variant' }: IVariantFunctionProps) =>
  (
    props: Record<string, unknown> & IThemeVariant,
  ): Record<string, ICssValue> | undefined => {
    const themeObject = props?.theme?.[themeProperty];
    const propValue = props[prop] as string;

    if (themeObject != null) {
      return themeObject[propValue];
    }
  };
export default variant;
