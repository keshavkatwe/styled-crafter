import {
  type IPropertyKey,
  type IPropertyMap,
  type IStylingProps,
} from './core2.types';
import type ICssValue from '../../types/ICssValue';

const core2 =
  <T>(propertyConfigs: IPropertyMap<T>) =>
  (stylingProps: IStylingProps<T>) => {
    const propKeys = Object.keys(stylingProps) as Array<IPropertyKey<T>>;
    const cssValues: Record<string, ICssValue> = {};
    propKeys.forEach((value) => {
      const propertyValue = stylingProps[value];
      const propertyConfig = propertyConfigs[value];

      if (propertyValue !== undefined) {
        if (propertyConfig?.property !== undefined) {
          cssValues[propertyConfig.property] = propertyValue;
        }
      }
    });

    return cssValues;
  };
export default core2;
