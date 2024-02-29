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
import { type IPropertyConfig, type IPropertyKey } from '../core2/core2.types';

const marginConfigLong: Record<
  IPropertyKey<Omit<IMarginLong, 'theme'>>,
  IPropertyConfig
> = {
  $margin: { property: 'margin', scale: 'spacing' },
  $marginTop: { property: 'margin-top', scale: 'spacing' },
  $marginRight: { property: 'margin-right', scale: 'spacing' },
  $marginBottom: { property: 'margin-bottom', scale: 'spacing' },
  $marginLeft: { property: 'margin-left', scale: 'spacing' },
  $marginX: { properties: ['margin-left', 'margin-right'], scale: 'spacing' },
  $marginY: { properties: ['margin-top', 'margin-bottom'], scale: 'spacing' },
};

const marginConfigShort: Record<
  IPropertyKey<Omit<IMarginShort, 'theme'>>,
  IPropertyConfig
> = {
  $m: marginConfigLong.$margin,
  $mt: marginConfigLong.$marginTop,
  $mr: marginConfigLong.$marginRight,
  $mb: marginConfigLong.$marginBottom,
  $ml: marginConfigLong.$marginLeft,
  $mx: marginConfigLong.$marginX,
  $my: marginConfigLong.$marginY,
};

const paddingConfigLong: Record<
  IPropertyKey<Omit<IPaddingLong, 'theme'>>,
  IPropertyConfig
> = {
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

const paddingConfigShort: Record<
  IPropertyKey<Omit<IPaddingShort, 'theme'>>,
  IPropertyConfig
> = {
  $p: paddingConfigLong.$padding,
  $pt: paddingConfigLong.$paddingTop,
  $pr: paddingConfigLong.$paddingRight,
  $pb: paddingConfigLong.$paddingBottom,
  $pl: paddingConfigLong.$paddingLeft,
  $px: paddingConfigLong.$paddingX,
  $py: paddingConfigLong.$paddingY,
};

export const margin = core2<Omit<IMarginProps, 'theme'>>({
  ...marginConfigLong,
  ...marginConfigShort,
});

export const padding = core2<Omit<IPaddingProps, 'theme'>>({
  ...paddingConfigLong,
  ...paddingConfigShort,
});

export const space = core2<Omit<ISpaceProps, 'theme'>>({
  ...marginConfigLong,
  ...marginConfigShort,
  ...paddingConfigLong,
  ...paddingConfigShort,
});

export default space;
