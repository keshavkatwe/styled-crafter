import { type DefaultCrafter } from 'styled-crafter';

type ISpacing = DefaultCrafter['spacing'];

export interface IMarginLong {
  $margin?: ISpacing;
  $marginTop?: ISpacing;
  $marginRight?: ISpacing;
  $marginBottom?: ISpacing;
  $marginLeft?: ISpacing;
  $marginX?: ISpacing;
  $marginY?: ISpacing;
}

export interface IMarginShort {
  $m?: ISpacing;
  $mt?: ISpacing;
  $mr?: ISpacing;
  $mb?: ISpacing;
  $ml?: ISpacing;
  $mx?: ISpacing;
  $my?: ISpacing;
}

export interface IPaddingLong {
  $padding?: ISpacing;
  $paddingTop?: ISpacing;
  $paddingRight?: ISpacing;
  $paddingBottom?: ISpacing;
  $paddingLeft?: ISpacing;
  $paddingX?: ISpacing;
  $paddingY?: ISpacing;
}

export interface IPaddingShort {
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
