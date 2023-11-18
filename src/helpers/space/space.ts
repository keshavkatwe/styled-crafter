import { type ISpaceProps } from './space.types';
import { core } from '../core';
import type ICssValue from '../../types/ICssValue';

const coreSpaceInstance = core<ISpaceProps>({
  // margin-properties
  $margin: 'margin',
  $marginTop: 'margin-top',
  $marginRight: 'margin-right',
  $marginBottom: 'margin-bottom',
  $marginLeft: 'margin-left',
  // marginX,
  // marginY,
  $m: 'margin',
  $mt: 'margin-top',
  $mr: 'margin-right',
  $mb: 'margin-bottom',
  $ml: 'margin-left',
  // mx,
  // my,

  // padding-properties
  $padding: 'padding',
  $paddingTop: 'padding-top',
  $paddingRight: 'padding-right',
  $paddingBottom: 'padding-bottom',
  $paddingLeft: 'padding-left',
  // paddingX,
  // paddingY,
  $p: 'padding',
  $pt: 'padding-top',
  $pr: 'padding-right',
  $pb: 'padding-bottom',
  $pl: 'padding-left',
  // px,
  // py,
});
const space = (props: ISpaceProps): Record<string, ICssValue> => {
  return coreSpaceInstance(props);
};
export default space;
