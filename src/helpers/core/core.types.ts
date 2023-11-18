import type ICssValue from '../../types/ICssValue';

export type IStylingProps<T> = { [KEY in keyof T]?: ICssValue };
