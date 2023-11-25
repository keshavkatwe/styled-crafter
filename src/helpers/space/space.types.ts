import { type DefaultCrafter } from 'styled-crafter';
import type ITheme from '../../types/ITheme';

type ISpacing = DefaultCrafter['spacing'];
export interface ISpaceProps extends ITheme {
  $margin?: ISpacing;
  $marginTop?: ISpacing;
  $marginRight?: ISpacing;
  $marginBottom?: ISpacing;
  $marginLeft?: ISpacing;
  $marginX?: ISpacing;
  $marginY?: ISpacing;
  $m?: ISpacing;
  $mt?: ISpacing;
  $mr?: ISpacing;
  $mb?: ISpacing;
  $ml?: ISpacing;
  $mx?: ISpacing;
  $my?: ISpacing;

  $padding?: ISpacing;
  $paddingTop?: ISpacing;
  $paddingRight?: ISpacing;
  $paddingBottom?: ISpacing;
  $paddingLeft?: ISpacing;
  $paddingX?: ISpacing;
  $paddingY?: ISpacing;
  $p?: ISpacing;
  $pt?: ISpacing;
  $pr?: ISpacing;
  $pb?: ISpacing;
  $pl?: ISpacing;
  $px?: ISpacing;
  $py?: ISpacing;
}
