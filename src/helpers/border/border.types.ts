import { type DefaultCrafter } from 'styled-crafter';
import type ITheme from '../../types/ITheme';

type IRadii = DefaultCrafter['radii'];
type IBorderThickness = DefaultCrafter['borderThickness'];
type IColor = DefaultCrafter['colors'];
type IBorderStyle = 'solid' | 'dotted' | 'dashed';

export interface IBorderRadiusLong extends ITheme {
  $borderRadius?: IRadii;
  $borderTopRadius?: IRadii;
  $borderBottomRadius?: IRadii;
  $borderLeftRadius?: IRadii;
  $borderRightRadius?: IRadii;
  $borderTopLeftRadius?: IRadii;
  $borderTopRightRadius?: IRadii;
  $borderBottomLeftRadius?: IRadii;
  $borderBottomRightRadius?: IRadii;
}

export interface IBorderRadiusShort extends ITheme {
  $br?: IRadii;
  $btr?: IRadii;
  $bbr?: IRadii;
  $blr?: IRadii;
  $brr?: IRadii;
  $btlr?: IRadii;
  $btrr?: IRadii;
  $bblr?: IRadii;
  $bbrr?: IRadii;
}

export interface IBorderWidthLong {
  $borderWidth?: IBorderThickness;
  $borderTopWidth?: IBorderThickness;
  $borderBottomWidth?: IBorderThickness;
  $borderLeftWidth?: IBorderThickness;
  $borderRightWidth?: IBorderThickness;
  $borderXWidth?: IBorderThickness;
  $borderYWidth?: IBorderThickness;
}

export interface IBorderWidthShort {
  $bw?: IBorderThickness;
  $btw?: IBorderThickness;
  $bbw?: IBorderThickness;
  $blw?: IBorderThickness;
  $brw?: IBorderThickness;
  $bxw?: IBorderThickness;
  $byw?: IBorderThickness;
}

export interface IBorderOtherProps extends ITheme {
  $borderStyle?: IBorderStyle;
  $borderColor?: IColor;
}

export type IBorderRadiusProps = IBorderRadiusLong & IBorderRadiusShort;
export type IBorderWidthProps = IBorderWidthLong & IBorderWidthShort;
export type IBorderProps = IBorderRadiusProps &
  IBorderWidthShort &
  IBorderOtherProps;
