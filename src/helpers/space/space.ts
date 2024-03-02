import {
  type IMarginLong,
  type IMarginProps,
  type IMarginShort,
  type IPaddingLong,
  type IPaddingProps,
  type IPaddingShort,
  type ISpaceProps,
} from './space.types';
import { core2 } from '../core2';
import { type IPropertyConfigMap } from '../../types/IPropertyConfig';

const marginConfigLong: IPropertyConfigMap<IMarginLong> = {
  $margin: { property: 'margin', scale: 'spacing' },
  $marginTop: { property: 'margin-top', scale: 'spacing' },
  $marginRight: { property: 'margin-right', scale: 'spacing' },
  $marginBottom: { property: 'margin-bottom', scale: 'spacing' },
  $marginLeft: { property: 'margin-left', scale: 'spacing' },
  $marginX: { properties: ['margin-left', 'margin-right'], scale: 'spacing' },
  $marginY: { properties: ['margin-top', 'margin-bottom'], scale: 'spacing' },
};

const marginConfigShort: IPropertyConfigMap<IMarginShort> = {
  $m: marginConfigLong.$margin,
  $mt: marginConfigLong.$marginTop,
  $mr: marginConfigLong.$marginRight,
  $mb: marginConfigLong.$marginBottom,
  $ml: marginConfigLong.$marginLeft,
  $mx: marginConfigLong.$marginX,
  $my: marginConfigLong.$marginY,
};

const paddingConfigLong: IPropertyConfigMap<IPaddingLong> = {
  $padding: { property: 'padding', scale: 'spacing' },
  $paddingTop: { property: 'padding-top', scale: 'spacing' },
  $paddingRight: { property: 'padding-right', scale: 'spacing' },
  $paddingBottom: { property: 'padding-bottom', scale: 'spacing' },
  $paddingLeft: { property: 'padding-left', scale: 'spacing' },
  $paddingX: {
    properties: ['padding-right', 'padding-left'],
    scale: 'spacing',
  },
  $paddingY: {
    properties: ['padding-top', 'padding-bottom'],
    scale: 'spacing',
  },
};

const paddingConfigShort: IPropertyConfigMap<IPaddingShort> = {
  $p: paddingConfigLong.$padding,
  $pt: paddingConfigLong.$paddingTop,
  $pr: paddingConfigLong.$paddingRight,
  $pb: paddingConfigLong.$paddingBottom,
  $pl: paddingConfigLong.$paddingLeft,
  $px: paddingConfigLong.$paddingX,
  $py: paddingConfigLong.$paddingY,
};

export const margin = core2<IMarginProps>({
  ...marginConfigLong,
  ...marginConfigShort,
});

export const padding = core2<IPaddingProps>({
  ...paddingConfigLong,
  ...paddingConfigShort,
});

const space = core2<ISpaceProps>({
  ...marginConfigLong,
  ...marginConfigShort,
  ...paddingConfigLong,
  ...paddingConfigShort,
});

export default space;
