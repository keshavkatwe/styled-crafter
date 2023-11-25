import type ICssValue from '../../types/ICssValue';
import type ITheme from '../../types/ITheme';

export type IStylingProps<T> = { [KEY in keyof T]?: ICssValue } & ITheme;

export interface ICoreOptions {
  themeAccessKey?: string;
}
