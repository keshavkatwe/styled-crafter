import {
  type IBackgroundColorProps,
  type IColorProps,
  type ITextColorProps,
} from './colors.types';
import { core2 } from '../core2';
import { type IPropertyConfigMap } from '../../types/IPropertyConfig';

const textColorsConfig: IPropertyConfigMap<ITextColorProps> = {
  $color: { property: 'color', scale: 'colors' },
  $clr: { property: 'color', scale: 'colors' },
};

const backgroundColorsConfig: IPropertyConfigMap<IBackgroundColorProps> = {
  $backgroundColor: { property: 'background-color', scale: 'colors' },
  $bgColor: { property: 'background-color', scale: 'colors' },
};

export const textColors = core2<ITextColorProps>(textColorsConfig);
export const backgroundColors = core2<IBackgroundColorProps>(
  backgroundColorsConfig,
);

/** `colors` util is used to apply text color and background color to components */
const colors = core2<IColorProps>({
  ...textColorsConfig,
  ...backgroundColorsConfig,
});

export default colors;
