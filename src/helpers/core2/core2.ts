import {
  type IPropertyConfig,
  type IPropertyKey,
  type IPropertyMap,
  type IStylingProps,
} from './core2.types';
import type ICssValue from '../../types/ICssValue';

const transformValue = (
  propertyConfig: IPropertyConfig,
  value: ICssValue,
): string | number => {
  if (typeof value === 'number' && !propertyConfig.isNumber) {
    return value + 'px';
  }
  return value;
};

const core2 =
  <T>(propertyConfigs: IPropertyMap<T>) =>
  (stylingProps: IStylingProps<T>) => {
    const propKeys = Object.keys(stylingProps) as Array<IPropertyKey<T>>;
    const cssValues: Record<string, ICssValue> = {};
    propKeys.forEach((value) => {
      const propertyValue = stylingProps[value];
      const propertyConfig = propertyConfigs[value];

      if (propertyValue !== undefined) {
        const transformedValue = transformValue(propertyConfig, propertyValue);

        if (propertyConfig?.property !== undefined) {
          cssValues[propertyConfig.property] = transformedValue;
        }
      }
    });

    return cssValues;
  };
export default core2;
