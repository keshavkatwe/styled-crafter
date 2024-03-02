import { type IPropertyConfigMap } from '../core2/core2.types';
import {
  type IBorderRadiusLong,
  type IBorderRadiusProps,
  type IBorderRadiusShort,
} from './border.types';
import { core2 } from '../core2';

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

export const borderRadius = core2<Omit<IBorderRadiusProps, 'theme'>>({
  ...borderRadiusConfigLong,
  ...borderRadiusConfigShort,
});
export default borderRadius;
