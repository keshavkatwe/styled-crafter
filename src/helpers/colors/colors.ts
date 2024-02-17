import type ICssValue from '../../types/ICssValue';
import { core } from '../core';
import { type IColorProps } from './colors.types';

const coreColorInstance = core<Omit<IColorProps, 'theme'>>({
  $color: 'color',
  $clr: 'color',
  $bgColor: 'background-color',
  $backgroundColor: 'background-color',
});

const colors = (props: IColorProps): Record<string, ICssValue> => {
  return coreColorInstance(props, {
    themeAccessKey: 'colors',
  });
};
export default colors;
