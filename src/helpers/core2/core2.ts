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
): ICssValue => {
  if (typeof value === 'number' && !propertyConfig.isNumber) {
    return value + 'px';
  }
  return value;
};

const getValueFromTheme = <T>(
  propertyConfig: IPropertyConfig,
  stylingProps: IStylingProps<T>,
  value: ICssValue,
): ICssValue => {
  const themeObj = stylingProps.theme;
  if (themeObj && propertyConfig.scale) {
    return themeObj[propertyConfig.scale]?.[value] ?? value;
  }
  return value;
};

const core2 =
  <T>(propertyConfigs: IPropertyMap<T>) =>
  (stylingProps: IStylingProps<T>) => {
    const propKeys = Object.keys(stylingProps) as Array<IPropertyKey<T>>;
    const cssValues: Record<string, ICssValue> = {};

    propKeys
      .filter((value) => value !== 'theme')
      .forEach((value) => {
        const propertyValue = stylingProps[value];
        const propertyConfig = propertyConfigs[value];

        if (propertyValue !== undefined) {
          const themePropertyValue = getValueFromTheme(
            propertyConfig,
            stylingProps,
            propertyValue,
          );

          const transformedValue = transformValue(
            propertyConfig,
            themePropertyValue,
          );

          if (propertyConfig?.property !== undefined) {
            cssValues[propertyConfig.property] = transformedValue;
          }
        }
      });

    return cssValues;
  };
export default core2;