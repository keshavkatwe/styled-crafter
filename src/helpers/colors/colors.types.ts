import { type DefaultCrafter } from 'styled-crafter';
import ITheme from '../../types/ITheme';

type IColor = DefaultCrafter['color'];
export interface IColorProps extends ITheme {
  color?: IColor;
  clr?: IColor;
  backgroundColor?: IColor;
  bgColor?: IColor;
}
