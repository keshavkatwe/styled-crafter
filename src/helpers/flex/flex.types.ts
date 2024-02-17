import type { DefaultCrafter } from 'styled-crafter';
import type ITheme from '../../types/ITheme';

type ISpacing = DefaultCrafter['spacing'];
export type IFlexDirection = 'row' | 'column';
export type IFlexWrap = 'wrap' | 'nowrap';
export type IAlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';
export type IJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export interface IFlexProps extends ITheme {
  $flexDir?: IFlexDirection;
  $flexWrap?: IFlexWrap;
  $alignItems?: IAlignItems;
  $justifyContent?: IJustifyContent;
  $flex?: number;
  $flexGrow?: number;
  $gap?: ISpacing;
}
