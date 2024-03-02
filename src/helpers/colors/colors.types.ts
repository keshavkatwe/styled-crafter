import { type DefaultCrafter } from 'styled-crafter';

type IColor = DefaultCrafter['colors'];

export interface ITextColorProps {
  /** Used to apply text color */
  $color?: IColor;

  /** Used to apply text color */
  $clr?: IColor;
}

export interface IBackgroundColorProps {
  /** Used to apply background color */
  $backgroundColor?: IColor;

  /** Used to apply background color */
  $bgColor?: IColor;
}

/** Used to apply text and background colors */
export type IColorProps = ITextColorProps & IBackgroundColorProps;
