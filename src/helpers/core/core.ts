import type ICssValue from '../../types/ICssValue';
import { type ICoreOptions, type IStylingProps } from './core.types';

const core =
  <T extends object>(
    stylingValues: Record<keyof T, string | string[]>,
    options?: ICoreOptions,
  ) =>
  (stylingProps: IStylingProps<T>) => {
    const cssValues: Record<string, ICssValue> = {};

    const themeObj = stylingProps?.theme;

    (Object.keys(stylingProps) as Array<keyof IStylingProps<T>>).forEach(
      (propKey) => {
        let propertyValue = stylingProps[propKey] as ICssValue;
        const propertyKey: string | string[] = stylingValues[propKey];
        if (propertyValue !== undefined && propertyKey !== undefined) {
          if (options?.themeAccessKey !== undefined) {
            propertyValue =
              themeObj?.[options?.themeAccessKey]?.[propertyValue] ??
              propertyValue;
          }

          if (typeof propertyValue === 'number') {
            propertyValue = propertyValue + 'px';
          }

          if (typeof propertyKey === 'string') {
            cssValues[propertyKey] = propertyValue;
          } else if (Array.isArray(propertyKey)) {
            propertyKey.forEach((propKeyItem) => {
              cssValues[propKeyItem] = propertyValue;
            });
          }
        }
      },
    );

    return cssValues;
  };

export default core;
