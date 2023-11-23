import type ICssValue from '../../types/ICssValue';
import { core } from '../core';
import { type IColorProps } from './colors.types';

const coreColorInstance = core<IColorProps>({
  color: 'color',
});

const colors = (props: IColorProps): Record<string, ICssValue> => {
  return coreColorInstance(props);
};
export default colors;
