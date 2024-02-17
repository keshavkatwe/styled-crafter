import type ICssValue from './ICssValue';

interface IThemeVariant {
  theme?: Record<string, Record<string, Record<string, ICssValue>>>;
}

export default IThemeVariant;
