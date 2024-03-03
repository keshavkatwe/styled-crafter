import type ICssValue from '../../types/ICssValue';
import type ITheme from '../../types/ITheme';
import type IPropertyKey from '../../types/IPropertyKey';
import type IPropertyConfig from '../../types/IPropertyConfig';

export type IPropertyMap<T> = Record<IPropertyKey<T>, IPropertyConfig>;
export type IStylingProps<T> = Partial<Record<IPropertyKey<T>, ICssValue>> &
  ITheme;
