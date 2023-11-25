import type ICssValue from './ICssValue';

interface ITheme {
  theme?: Partial<Record<string, Record<string, ICssValue>>>;
}

export default ITheme;
