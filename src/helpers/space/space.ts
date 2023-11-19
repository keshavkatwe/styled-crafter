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
  $marginX: ['margin-left', 'margin-right'],
  $marginY: ['margin-top', 'margin-bottom'],
  $m: 'margin',
  $mt: 'margin-top',
  $mr: 'margin-right',
  $mb: 'margin-bottom',
  $ml: 'margin-left',
  $mx: ['margin-left', 'margin-right'],
  $my: ['margin-top', 'margin-bottom'],

  // padding-properties
  $padding: 'padding',
  $paddingTop: 'padding-top',
  $paddingRight: 'padding-right',
  $paddingBottom: 'padding-bottom',
  $paddingLeft: 'padding-left',
  $paddingX: ['padding-right', 'padding-left'],
  $paddingY: ['padding-top', 'padding-bottom'],
  $p: 'padding',
  $pt: 'padding-top',
  $pr: 'padding-right',
  $pb: 'padding-bottom',
  $pl: 'padding-left',
  $px: ['padding-right', 'padding-left'],
  $py: ['padding-top', 'padding-bottom'],
});
const space = (props: ISpaceProps): Record<string, ICssValue> => {
  return coreSpaceInstance(props);
};
export default space;
