import {
  type IBorderOtherProps,
  type IBorderProps,
  type IBorderRadiusLong,
  type IBorderRadiusProps,
  type IBorderRadiusShort,
  type IBorderWidthLong,
  type IBorderWidthProps,
  type IBorderWidthShort,
} from './border.types';
import { core2 } from '../core2';
import { type IPropertyConfigMap } from '../../types/IPropertyConfig';

const borderRadiusConfigLong: IPropertyConfigMap<IBorderRadiusLong> = {
  $borderRadius: { property: 'border-radius', scale: 'radii' },
  $borderTopRadius: {
    properties: ['border-top-left-radius', 'border-top-right-radius'],
    scale: 'radii',
  },
  $borderBottomRadius: {
    properties: ['border-bottom-left-radius', 'border-bottom-right-radius'],
    scale: 'radii',
  },
  $borderLeftRadius: {
    properties: ['border-top-left-radius', 'border-bottom-left-radius'],
    scale: 'radii',
  },
  $borderRightRadius: {
    properties: ['border-top-right-radius', 'border-bottom-right-radius'],
    scale: 'radii',
  },
  $borderTopLeftRadius: { property: 'border-top-left-radius', scale: 'radii' },
  $borderTopRightRadius: {
    property: 'border-top-right-radius',
    scale: 'radii',
  },
  $borderBottomLeftRadius: {
    property: 'border-bottom-left-radius',
    scale: 'radii',
  },
  $borderBottomRightRadius: {
    property: 'border-bottom-right-radius',
    scale: 'radii',
  },
};

const borderRadiusConfigShort: IPropertyConfigMap<IBorderRadiusShort> = {
  $br: borderRadiusConfigLong.$borderRadius,
  $btr: borderRadiusConfigLong.$borderTopRadius,
  $bbr: borderRadiusConfigLong.$borderBottomRadius,
  $blr: borderRadiusConfigLong.$borderLeftRadius,
  $brr: borderRadiusConfigLong.$borderRightRadius,
  $btlr: borderRadiusConfigLong.$borderTopLeftRadius,
  $btrr: borderRadiusConfigLong.$borderTopRightRadius,
  $bblr: borderRadiusConfigLong.$borderBottomLeftRadius,
  $bbrr: borderRadiusConfigLong.$borderBottomRightRadius,
};

const borderWidthConfigLong: IPropertyConfigMap<IBorderWidthLong> = {
  $borderWidth: { property: 'border-width', scale: 'borderThickness' },
  $borderTopWidth: { property: 'border-top-width', scale: 'borderThickness' },
  $borderBottomWidth: {
    property: 'border-bottom-width',
    scale: 'borderThickness',
  },
  $borderLeftWidth: { property: 'border-left-width', scale: 'borderThickness' },
  $borderRightWidth: {
    property: 'border-right-width',
    scale: 'borderThickness',
  },
  $borderXWidth: {
    properties: ['border-left-width', 'border-right-width'],
    scale: 'borderThickness',
  },
  $borderYWidth: {
    properties: ['border-top-width', 'border-bottom-width'],
    scale: 'borderThickness',
  },
};

const borderWidthConfigShort: IPropertyConfigMap<IBorderWidthShort> = {
  $bw: borderWidthConfigLong.$borderWidth,
  $btw: borderWidthConfigLong.$borderTopWidth,
  $bbw: borderWidthConfigLong.$borderBottomWidth,
  $blw: borderWidthConfigLong.$borderLeftWidth,
  $brw: borderWidthConfigLong.$borderRightWidth,
  $bxw: borderWidthConfigLong.$borderXWidth,
  $byw: borderWidthConfigLong.$borderYWidth,
};

const borderRadiusConfig = {
  ...borderRadiusConfigLong,
  ...borderRadiusConfigShort,
};

const borderWidthConfig = {
  ...borderWidthConfigLong,
  ...borderWidthConfigShort,
};

const borderOtherConfig: IPropertyConfigMap<IBorderOtherProps> = {
  $borderColor: { property: 'border-color', scale: 'colors' },
  $borderStyle: { property: 'border-style' },
};

export const borderRadius = core2<IBorderRadiusProps>(borderRadiusConfig);
export const borderWidth = core2<IBorderWidthProps>(borderWidthConfig);
export const borderOther = core2<IBorderOtherProps>(borderOtherConfig);

const border = core2<IBorderProps>({
  ...borderRadiusConfig,
  ...borderWidthConfig,
  ...borderOtherConfig,
});
export default border;
