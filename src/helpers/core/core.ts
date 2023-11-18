import type ICssValue from '../../types/ICssValue';
import { type IStylingProps } from './core.types';

const core =
  <T extends object>(stylingValues: Record<keyof T, string | string[]>) =>
  (stylingProps: IStylingProps<T>) => {
    const cssValues: Record<string, ICssValue> = {};

    (Object.keys(stylingProps) as Array<keyof IStylingProps<T>>).forEach(
      (propKey) => {
        let propertyValue = stylingProps[propKey] as ICssValue;
        const propertyKey: string | string[] = stylingValues[propKey];
        if (propertyValue !== undefined && propertyKey !== undefined) {
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
