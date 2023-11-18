import type ICssValue from '../../types/ICssValue';
import { type IStylingProps } from './core.types';

const core =
  <T extends object>(stylingValues: Record<keyof T, string>) =>
  (stylingProps: IStylingProps<T>) => {
    const cssValues: Record<string, ICssValue> = {};

    (Object.keys(stylingProps) as Array<keyof IStylingProps<T>>).forEach(
      (propKey) => {
        let propertyValue = stylingProps[propKey] as ICssValue;
        const propertyKey = stylingValues[propKey];
        if (propertyValue !== undefined && propertyKey !== undefined) {
          if (typeof propertyValue === 'number') {
            propertyValue = propertyValue + 'px';
          }
          cssValues[propertyKey] = propertyValue;
        }
      },
    );

    return cssValues;
  };

export default core;
