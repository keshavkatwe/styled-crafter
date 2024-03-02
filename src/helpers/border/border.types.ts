import { type DefaultCrafter } from 'styled-crafter';
import type ITheme from '../../types/ITheme';

type IRadii = DefaultCrafter['radii'];
export interface IBorderRadiusLong extends ITheme {
  $borderRadius: IRadii;
  $borderTopRadius: IRadii;
  $borderBottomRadius: IRadii;
  $borderLeftRadius: IRadii;
  $borderRightRadius: IRadii;
  $borderTopLeftRadius: IRadii;
  $borderTopRightRadius: IRadii;
  $borderBottomLeftRadius: IRadii;
  $borderBottomRightRadius: IRadii;
}

export interface IBorderRadiusShort extends ITheme {
  $br: IRadii;
  $btr: IRadii;
  $bbr: IRadii;
  $blr: IRadii;
  $brr: IRadii;
  $btlr: IRadii;
  $btrr: IRadii;
  $bblr: IRadii;
  $bbrr: IRadii;
}

export type IBorderRadiusProps = IBorderRadiusLong & IBorderRadiusShort;
