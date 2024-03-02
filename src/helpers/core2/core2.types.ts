import type ICssValue from '../../types/ICssValue';
import type ITheme from '../../types/ITheme';
import { type DefaultCrafter } from 'styled-crafter';

export interface IPropertyConfig {
  property?: string;
  properties?: string[];
  isNumber?: boolean;
  scale?: keyof DefaultCrafter;
}
export type IPropertyKey<T> = keyof T;
export type IPropertyConfigMap<T> = Record<
  IPropertyKey<Omit<T, 'theme'>>,
  IPropertyConfig
>;
export type IPropertyMap<T> = Record<IPropertyKey<T>, IPropertyConfig>;
export type IStylingProps<T> = Partial<Record<IPropertyKey<T>, ICssValue>> &
  ITheme;
