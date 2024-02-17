import type IThemeVariant from '../../types/IThemeVariant';

export type IVariantProps<T> = keyof T;

export interface IVariantFunctionProps<T> {
  propName: keyof T;
  themeProperty: string;
}

export type IVariantSecondFunctionProps<T> = T & IThemeVariant;
