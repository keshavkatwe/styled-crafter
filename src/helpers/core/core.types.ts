import type ICssValue from '../../types/ICssValue';

export type IStylingProps<T> = { [KEY in keyof T]?: ICssValue } & {
  theme?: Partial<Record<string, Record<string, ICssValue>>>;
};

export interface ICoreOptions {
  themeAccessKey?: string;
}
