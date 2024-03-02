import { type DefaultCrafter } from 'styled-crafter';

type IColor = DefaultCrafter['colors'];

export interface ITextColorProps {
  $color?: IColor;
  $clr?: IColor;
}

export interface IBackgroundColorProps {
  $backgroundColor?: IColor;
  $bgColor?: IColor;
}

export type IColorProps = ITextColorProps & IBackgroundColorProps;
