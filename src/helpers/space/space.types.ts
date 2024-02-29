import { type DefaultCrafter } from 'styled-crafter';
import type ITheme from '../../types/ITheme';

type ISpacing = DefaultCrafter['spacing'];

export interface IMarginLong extends ITheme {
  $margin?: ISpacing;
  $marginTop?: ISpacing;
  $marginRight?: ISpacing;
  $marginBottom?: ISpacing;
  $marginLeft?: ISpacing;
  $marginX?: ISpacing;
  $marginY?: ISpacing;
}

export interface IMarginShort extends ITheme {
  $m?: ISpacing;
  $mt?: ISpacing;
  $mr?: ISpacing;
  $mb?: ISpacing;
  $ml?: ISpacing;
  $mx?: ISpacing;
  $my?: ISpacing;
}

export interface IPaddingLong extends ITheme {
  $padding?: ISpacing;
  $paddingTop?: ISpacing;
  $paddingRight?: ISpacing;
  $paddingBottom?: ISpacing;
  $paddingLeft?: ISpacing;
  $paddingX?: ISpacing;
  $paddingY?: ISpacing;
}

export interface IPaddingShort extends ITheme {
  $p?: ISpacing;
  $pt?: ISpacing;
  $pr?: ISpacing;
  $pb?: ISpacing;
  $pl?: ISpacing;
  $px?: ISpacing;
  $py?: ISpacing;
}

export type IPaddingProps = IPaddingLong & IPaddingShort;
export type IMarginProps = IMarginLong & IMarginShort;
export type ISpaceProps = IMarginProps & IPaddingProps;
