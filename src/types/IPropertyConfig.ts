import type { DefaultCrafter } from 'styled-crafter';
import type IPropertyKey from './IPropertyKey';

interface IPropertyConfig {
  property?: string;
  properties?: string[];
  isNumber?: boolean;
  scale?: keyof DefaultCrafter;
}

export type IPropertyConfigMap<T> = Record<
  IPropertyKey<Omit<T, 'theme'>>,
  IPropertyConfig
>;

export default IPropertyConfig;
