import type ICssValue from '../../types/ICssValue';

export interface IPropertyConfig {
  property?: string;
  properties?: string[];
  isNumber?: boolean;
  scale?: string;
}

export type IPropertyKey<T> = keyof T;
export type IPropertyMap<T> = Record<IPropertyKey<T>, IPropertyConfig>;
export type IStylingProps<T> = Partial<Record<IPropertyKey<T>, ICssValue>>;
