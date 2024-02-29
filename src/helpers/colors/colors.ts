import {
  type IBackgroundColorProps,
  type IColorProps,
  type ITextColorProps,
} from './colors.types';
import { core2 } from '../core2';
import { type IPropertyConfig, type IPropertyKey } from '../core2/core2.types';

const textColorsConfig: Record<
  IPropertyKey<Omit<ITextColorProps, 'theme'>>,
  IPropertyConfig
> = {
  $color: { property: 'color', scale: 'colors' },
  $clr: { property: 'color', scale: 'colors' },
};

const backgroundColorsConfig: Record<
  IPropertyKey<Omit<IBackgroundColorProps, 'theme'>>,
  IPropertyConfig
> = {
  $backgroundColor: { property: 'background-color', scale: 'colors' },
  $bgColor: { property: 'background-color', scale: 'colors' },
};

export const textColors =
  core2<Omit<ITextColorProps, 'theme'>>(textColorsConfig);
export const backgroundColors = core2<Omit<IBackgroundColorProps, 'theme'>>(
  backgroundColorsConfig,
);

const colors = core2<Omit<IColorProps, 'theme'>>({
  ...textColorsConfig,
  ...backgroundColorsConfig,
});

export default colors;
