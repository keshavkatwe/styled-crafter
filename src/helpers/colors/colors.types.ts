import { type DefaultCrafter } from 'styled-crafter';
import type ITheme from '../../types/ITheme';

type IColor = DefaultCrafter['colors'];

export interface ITextColorProps extends ITheme {
  $color?: IColor;
  $clr?: IColor;
}

export interface IBackgroundColorProps extends ITheme {
  $backgroundColor?: IColor;
  $bgColor?: IColor;
}

export type IColorProps = ITextColorProps & IBackgroundColorProps;
