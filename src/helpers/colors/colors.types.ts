import { type DefaultCrafter } from 'styled-crafter';

type IColor = DefaultCrafter['color'];
export interface IColorProps {
  color?: IColor;
  clr?: IColor;
  backgroundColor?: IColor;
  bgColor?: IColor;
}
