import { type DefaultCrafter } from 'styled-crafter';

type ISpacing = DefaultCrafter['spacing'];
export interface ISpaceProps {
  $margin?: ISpacing;
  $marginTop?: ISpacing;
  $marginRight?: ISpacing;
  $marginBottom?: ISpacing;
  $marginLeft?: ISpacing;
  $marginX?: ISpacing;

  $m?: ISpacing;
  $mt?: ISpacing;
  $mr?: ISpacing;
  $mb?: ISpacing;
  $ml?: ISpacing;

  $padding?: ISpacing;
  $paddingTop?: ISpacing;
  $paddingRight?: ISpacing;
  $paddingBottom?: ISpacing;
  $paddingLeft?: ISpacing;

  $p?: ISpacing;
  $pt?: ISpacing;
  $pr?: ISpacing;
  $pb?: ISpacing;
  $pl?: ISpacing;
}
