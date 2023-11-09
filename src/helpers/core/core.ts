import type ICssValue from '../../types/ICssValue';

const core =
  <T extends Record<string, unknown>>(stylingValues: Record<keyof T, string>) =>
  (stylingProps: { [KEY in keyof T]?: ICssValue }) => {
    const cssValues: Record<string, ICssValue> = {};

    Object.keys(stylingProps).forEach((propKey) => {
      let propertyValue = stylingProps[propKey];
      const propertyKey = stylingValues[propKey];
      if (propertyValue !== undefined && propertyKey !== undefined) {
        if (typeof propertyValue === 'number') {
          propertyValue = propertyValue + 'px';
        }
        cssValues[propertyKey] = propertyValue;
      }
    });

    return cssValues;
  };

export default core;